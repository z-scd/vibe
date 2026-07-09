"use client";
export default function Form() {
  const sendUrl = async (object) => {
    const response = await fetch("/api/fetchUrl", {
      method: "POST",
      body: object,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData);
    console.log(formData);
    console.log(formJson);
    sendUrl(JSON.stringify(formJson));
  };
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <input className="border-1" type="text" name="url" />
      <button type="submit">Submit</button>
    </form>
  );
}
