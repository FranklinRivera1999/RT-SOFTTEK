import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { StarshipController } from "../controllers";
export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  try {
    const startshipController: StarshipController = new StarshipController();
    const response = await startshipController.getStarships();
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    console.log("getStartship::ERROR =>", error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
