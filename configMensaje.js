const nodemailer = require('nodemailer');
module.exports = (formulario) => {
 var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'proyectotecnologias26@gmail.com', // Cambialo por tu email
 pass: 'juancarlos1999*' // Cambialo por tu password
 }
 });
const mailOptions = {
 from: `"${formulario.nombre} " <${formulario.email}>`,
 to: 'carlosalvmtz@hotmail.com', // Cambia esta parte por el destinatario
 subject: 'formulario.asunto',
 html: `
 El usuario <strong> ${formulario.nombre}</strong> con el correo:
 <strong>${formulario.email}</strong>  dejo el siguiente mensaje: <br/>
  ${formulario.mensaje}
 `
 };
transporter.sendMail(mailOptions, function (err, info) {
    console.log(formulario.name);
 if (err)
 console.log(err);
 else
 console.log(info);
 });
}