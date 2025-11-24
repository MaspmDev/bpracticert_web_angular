// Cargar variables del archivo .env
require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Crear servidor
const app = express();
app.use(cors());
app.use(express.json()); 

// Ruta que recibe los datos del formulario
app.post('/enviar-formulario', async (req, res) => {
  const { nombre, apellido, email, celular, mensaje } = req.body;

  // Configurar conexión con un correo
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Configurar el mensaje del correo
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.TO_EMAIL, 
    subject: "Nuevo mensaje desde la página de BPRACTICERT",
    html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f7f7f7;">
    
    <!-- ENCABEZADO CON LOGO -->
    <div style="text-align: center; margin-bottom: 25px;">
  <img 
  src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/412378259_122102769140154759_3367639398239180497_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=er7HNNYaEQgQ7kNvwFEV13v&_nc_oc=Adk-1ULPgTjXYip5yJSE-33veFhsjFcTu3zce_knUKldsmwvS73UmcSMxoz_APooO8w&_nc_zt=23&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Z_h511bScjP_507Pc6nbjA&oh=00_AfhYfYARyXx9oLo-Ri99p2a6XYK0R9hEtxENJ39V7n4x6w&oe=69131798"
  alt="Logo"
  style="display:block; margin:auto; max-width:120px; height:auto; border-radius:8px;">
<br>
      <h2>  Has recibido un nuevo mensaje desde la página BPRACTICERT
      </h2>
    </div>
    
    <!-- CUERPO DEL MENSAJE -->
    <div style="background: white; padding: 20px; border-radius: 10px;">
      <p style="font-size: 16px; color:#333;">
        ¡Hola! 👋, una persona está interesada y dejó sus datos:
      </p>
      
      <table cellspacing="0" cellpadding="8" style="width: 100%; font-size: 15px;">
        <tr>
       <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Apellido:</b> ${apellido}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Celular:</b> ${celular}</p>
      <p><b>Mensaje:</b> ${mensaje}</p>
        </tr>
      </table>

      <p style="margin-top: 25px; font-size: 14px; color:#777;">
        Este mensaje fue enviado automáticamente desde el formulario de contacto del sitio web.
      </p>
    </div>

  </div>
`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ ok: true, message: "Correo enviado correctamente ✅" });
  } catch (error) {
    console.log("❌ Error al enviar correo:", error);
    res.status(500).json({ ok: false, message: "Hubo un error al enviar el mensaje." });
  }
});

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${process.env.PORT}`);
});
