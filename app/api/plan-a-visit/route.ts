export async function POST(req: Request) {
  const { firstName, lastName, email, phone, visitDate, heardFrom } = await req.json();

  if (!firstName || !email) {
    return Response.json({ error: "First name and email are required." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !server || !listId) {
    return Response.json({ error: "Server configuration error." }, { status: 500 });
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${listId}/members`;

  const body = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName ?? "",
      PHONE: phone ?? "",
    },
    tags: ["Plan a Visit"],
    ...(visitDate && {
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName ?? "",
        PHONE: phone ?? "",
        VISITDATE: visitDate,
      },
    }),
  };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.status === 400) {
    const data = await res.json();
    // Already subscribed is fine — just update their tags
    if (data.title === "Member Exists") {
      const md5 = require("crypto").createHash("md5").update(email.toLowerCase()).digest("hex");
      await fetch(`https://${server}.api.mailchimp.com/3.0/lists/${listId}/members/${md5}/tags`, {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tags: [{ name: "Plan a Visit", status: "active" }] }),
      });
      return Response.json({ success: true });
    }
    return Response.json({ error: data.detail ?? "Submission failed." }, { status: 400 });
  }

  if (!res.ok) {
    return Response.json({ error: "Failed to subscribe. Please try again." }, { status: 500 });
  }

  return Response.json({ success: true });
}
