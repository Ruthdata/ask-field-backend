import { Response } from "express";

export function apiSuccessResponse(
    res: Response,
    message = 'Success',
    data: any,
    statusCode = 200,
  ) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

export function apiFailureResponse(
    res: any,
    error = '',
    statusCode = 401,
  ) {
    return res.status(statusCode).json({
      success: true,
      error
    });
  }

export function serviceResponse(success: boolean, message: string, data: any = null) {
  return {
    success,
    message,
    data
  }
}