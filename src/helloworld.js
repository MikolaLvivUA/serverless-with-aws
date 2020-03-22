module.exports.hello = (evt, ctx, done)/*(event, context, callback)*/ => {
  const response = {
      statusCode: 200,
      data: evt,
  };
  done(null, response);
};

/*event.json it's our json file with our data*/
