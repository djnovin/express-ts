import app from "./app";

const PORT = process.env.PORT || 8080;

const main = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });
    } catch (err) {
        console.log(err);
    }
};

void main()


