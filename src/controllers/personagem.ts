import { Request, Response } from "express";
import { prisma } from "../../config/prisma";
import { handleErrors } from "../helpers/handleErrors";

export default {


  list: async (request: Request, response: Response) => {
    try {
      const personagens = await prisma.personagens.findMany();
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  create: async (request: Request, response: Response) => {
    try {
      const { nome, idade, descricao } = request.body;
      if (!nome || !idade|| !descricao ) {
        return response.status(400).json("Dados do aluno incompletos");
      }
      const student = await prisma.personagens.create({
        data: {
          nome,
          idade,
          descricao,
        },
      });
      return response.status(201).json(student);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  update: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { nome, idade, descricao } = request.body;

      const student = await prisma.personagens.update({
        data: {
          nome,
          idade,
          descricao,
        },
        where: { id: +id },
      });

      return response.status(200).json(student);
    } catch (e) {
      return handleErrors(e, response);
    }
  },

  delete: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const user = await prisma.personagens.delete({
        where: {
          id: +id,
        },
      });

      return response.status(200).json(user);
    } catch (e) {
      return handleErrors(e, response);
    }
  },
};
