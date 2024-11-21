export enum Message {
	SOMETHING_WENT_WRONG = 'Something went wrong!',
	NO_DATA_FOUND = 'No data is found!',
	CREATE_FAILED = 'Create is failed!',
	UPDATE_FAILED = 'Update is failed!',
	REMOVE_FAILED = 'Remove is failed!',
	UPLOAD_FAILED = 'Upload is failed!',
	BAD_REQUEST = 'Bad Request',

	NO_MEMBER_NICK = 'No member with that member nick!',
	BLOCKED_USER = 'You have been blocked',
	WRONG_PASSWORD = 'Wrong password intered, please try again!',
	NOT_AUTHENTICATED = 'You are not authenticated, Please login first!',
	TOKEN_NOT_EXIST = 'Token creation error!',
	ONLY_SPECIFIC_ROLES_ALLOWED = 'Allowed only for member with specific roles!',
	NOT_ALLOWED_REQUEST = 'Not Allowed Request!',
	PROVIDE_ALLOWED_FORMAT = 'Please provide jpg, jpeg or png images!',
	SELF_SUBSCRIPTION_DENIED = 'Self subscription is denied!',
}
