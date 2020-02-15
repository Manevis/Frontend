import React from 'react';
import fetch from 'isomorphic-unfetch'

const EmailValidation = props => {
  console.log(props);
  return (
    <h1>validation.</h1>
  )
};

EmailValidation.getInitialProps = async ctx => {
  const result = await fetch(`http://localhost:8888/api/users/register/email-validation`,
    {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
      emailValidationToken: ctx.query.emailValidationToken
    })});

  const json = await result.json();

  if(!json.ok) {
    if(ctx.res) {
      ctx.res.writeHead(302, {
        Location: '/'
      });
      ctx.res.end();
    }
  }

  console.log(json)

  return json;
};

export default EmailValidation;
