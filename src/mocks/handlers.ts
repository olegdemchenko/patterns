/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import paths from './paths';
import {
  lorem,
  validUserId,
  userData,
} from './mockData';

const handlers = [
  rest.get(paths.fetchAdapter.lorem, (req, res, ctx) => (
    res(
      ctx.status(200),
      ctx.text(lorem),
    )
  )),
  rest.post(paths.fetchAdapter.userData, (req, res, ctx) => {
    if (req.body === validUserId) {
      return res(
        ctx.status(200),
        ctx.json(userData),
      );
    }
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not authorized',
      }),
    );
  }),
];

export default handlers;
