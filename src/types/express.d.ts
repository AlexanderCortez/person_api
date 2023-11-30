declare namespace Express {
  interface Response {
    sendSuccess: Send,
    sendNotFound: Send,
    sendError: Send,
    sendInvalid: Send,
  }
}
