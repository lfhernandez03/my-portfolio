import React, { useState } from "react";
import Inputs from "./Inputs";
import emailjs from "emailjs-com";

interface FormProps {
  serviceId: string;
  templateId: string;
  userId: string;
}


function Form({ serviceId, templateId, userId }: FormProps) {
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        serviceId,
        templateId,
        formData,
        userId
      );
      alert("Correo enviado exitosamente!");
    } catch (error) {
      console.error("Error enviando el correo:", error);
      alert("Hubo un error enviando el correo.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <Inputs
            type="text"
            name="nombre"
            id="Nombre"
            placeholder="Pepito Perez"
            required
            onChange={handleChange}
          />
          <Inputs
            type="email"
            name="email"
            id="Correo Electronico"
            placeholder="peperez@example.com"
            required
            onChange={handleChange}
          />
        </div>
        <Inputs
          type="text"
          name="asunto"
          id="Asunto"
          placeholder="Asunto del correo"
          required
          onChange={handleChange}
        />
        <div className="mt-2">
          <label htmlFor="mensaje" className="text-sm">
            Mensaje
          </label>
          <textarea
            className="w-full h-20 border-2 rounded-md px-2 mt-1"
            name="mensaje"
            id="Mensaje"
            placeholder="Escribe tu mensaje aqui"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="w-full h-8 border-2 rounded-md px-2 mt-2 bg-white text-black font-bold">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;
