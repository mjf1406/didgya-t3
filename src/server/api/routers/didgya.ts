import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const didgyaRouter = createTRPCRouter({
  // TODO: Create Didgya
  // create: publicProcedure
  //   .input(z.object({ 
  //     name: z.string().min(1)

  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.didgya.create({
  //       data: {
  //         name: input.name,
  //       },
  //     });
  //   }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.didgya.findFirst({
      orderBy: { createdAt: "desc" },
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.didgya.findMany();
  }),

  getAllByUserId: publicProcedure.query(({ ctx, input }) => {
    console.log("🚀 ~ getAllByUserId:publicProcedure.query ~ input:", input)
    return ctx.db.didgya.findMany({
      where: {
        userId: ctx.userId
      },
    });
  })


  // TODO: Update Didgya
  // update: publicProcedure
  //   .input(z.object({
  //     id: z.number(),
  //     name: z.string().min(1)

  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db call
  //     await new Promise((resolve) => setTimeout(resolve, 1000));

  //     return ctx.db.didgya.update({
  //       where: {
  //         id: input.id,
  //       },
  //       data: {
  //         name: input.name,
  //       },
  //     });
  //   }),

  // TODO: Delete Didgya
  // delete: publicProcedure
  //   .input(z.object({
  //     id: z.number()

  //   }))
  //   .mutation(async ({ ctx, input }) => {
  //     // simulate a slow db
});