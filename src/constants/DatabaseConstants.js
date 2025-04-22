const DatabaseConstants = {
    ConnectionSuccessful: "Database connection established successfully.",
    ConnectionFailed: "Error connecting to the database: ",
    SyncSuccessful: "Database synced.",
    SyncFailed: "Error syncing database: ",
    ValidationErrors: {
        InvalidBookedTickets: "Booked tickets cannot exceed total tickets."
    }
}

module.exports.DatabaseConstants = DatabaseConstants;