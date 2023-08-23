import { handler } from "../src/handlers/createUser";

describe("Lambda POST createUser Handler", () => {
  it("should return data on successful request", async () => {
    const data = {
      nombre: "PRUEBA",
      apellido: "PRUEBA",
    };
    // @ts-ignore
    const result = await handler({ body: JSON.stringify(data) });
    // @ts-ignore
    expect(result.statusCode).toEqual(200);
  });

  it("It should give an error when entering the lastname as an empty string", async () => {
    const data = {
      nombre: "PRUEBAv2",
      apellido: "",
    };
    // @ts-ignore
    const result = await handler({ body: JSON.stringify(data) });
    // @ts-ignore
    expect(result.statusCode).toEqual(400);
    // @ts-ignore
    const response = JSON.parse(result.body);
    expect(response.error).toEqual("Por favor ingresar datos validos");
  });

  it("It should give an error when entering the name as null", async () => {
    const data = {
      nombre: null,
      apellido: "PRUEBA3",
    };
    // @ts-ignore
    const result = await handler({ body: JSON.stringify(data) });
    // @ts-ignore
    expect(result.statusCode).toEqual(400);
    // @ts-ignore
    const response = JSON.parse(result.body);
    expect(response.error).toEqual("Por favor ingresar datos validos");
  });
});
