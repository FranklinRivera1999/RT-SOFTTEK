import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { UserController } from "../controllers";
export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  try {
    const userController: UserController = new UserController();
    const body = JSON.parse(event.body || "{}");
    const response = await userController.createUser({ body });
    if (response.estado) {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify(response),
      };
    }
  } catch (error) {
    console.log("createUser::ERROR =>", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
