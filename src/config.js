export default {
    s3: {
        REGION: "eu-west-1",
        BUCKET: "serverless-notes-app-tutorial-01072019"
    },
    apiGateway: {
        REGION: "eu-west-1",
        URL: "https://p5b1rh0wf0.execute-api.eu-west-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-west-1",
        USER_POOL_ID: "eu-west-1_kTpQjfPAh",
        APP_CLIENT_ID: "1u3nngfq4c5g9lq9felbmin4am",
        IDENTITY_POOL_ID: "eu-west-1:9a36b508-171d-4e80-83c4-e8cba6188838"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
};
