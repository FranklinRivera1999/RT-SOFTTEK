import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { UserController } from "../controllers";
export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  try {
    const userController: UserController = new UserController();
    const response = await userController.getAllUsers();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log("getUsers::ERROR =>", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
