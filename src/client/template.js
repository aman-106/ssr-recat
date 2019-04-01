export default function template(styles, body, script = '') {
  return `
    <!DOCTYPE html>
  <html>
    <head>
      <title>ssr-react</title>
      ${styles}
    </head>
    <body style='display: block;margin: 0px;'>
      <div id="app">${body}</div>
      ${script}
    </body>
  </html>
    `
}