export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    version: "1.0.0",
    messages: [
      {
        id: 1,
        title: "通知标题",
        content: "内容正文",
        date: "2024-01-01"
      }
    ]
  });
}
