import React from 'react';

export default class extends React.Component {
	render() {
		return (
			<html>
				<head>
					<title></title>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" crossOrigin="anonymous" />
					<link href="/static/pageframe.css" rel="stylesheet" />
				</head>
				<body>
					<div className="container">
						<form className="form-signin">
        					<h2 className="form-signin-heading">Please sign in</h2>
        					<label for="inputEmail" className="sr-only">Email address</label>
        					<input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
        					<label for="inputPassword" className="sr-only">Password</label>
        					<input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        					<div className="checkbox">
								<label>
            						<input type="checkbox" value="remember-me" /> Remember me
          						</label>
        					</div>
        					<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      					</form>
					</div>
				</body>
			</html>
		)
	}
}