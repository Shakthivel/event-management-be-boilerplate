const ResponseConstants = {
    FailedResponseMessage: "Failed in Processing the Request",
    SuccessResponseMessage: "Success in Processing the Request",
    User: {
        SuccessRegistration: "User registered successfully",
        SuccessLogin: "User logged in successfully",
        Error: {
            ExistingUser: "User already exists with the given email",
            LoginFailed: "Invalid credentials",
            NotFound: "User not found",
        }
    },
    Event: {
        SuccessCreation: "Event created successfully",
        SuccessUpdate: "Event updated successfully",
        SuccessDeletion: "Event deleted successfully",
        Error: {
            NotFound: "Event not found",
            InvalidDateTime: "Invalid date/time format. Use YYYY-MM-DD for date and HH:MM for time"
        }
    },
    Registration: {
        SuccessRegistration: "User registered for the event successfully",
        SuccessDeletion: "Registration deleted successfully",
        Error: {
            NotFound: "Registration not found",
            AlreadyRegistered: "User already registered for this event"
        }
    }
} 

module.exports.ResponseConstants = ResponseConstants;