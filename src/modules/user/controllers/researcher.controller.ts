import { Request, Response } from 'express';
import { ResearcherService } from '../services/researcher.service';
import { asyncHandler } from '../../../utils/asyncHandler';
import { apiSuccessResponse } from '../../../utils/apiResponse';

const researcherService = new ResearcherService();

export const createUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await researcherService.createUser(req.body);
    apiSuccessResponse(res, 'User created', user, 201);
  }
);

export const getUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await researcherService.getUser(req.params.id);
    apiSuccessResponse(res, 'User Fetched',user);
  }
);
