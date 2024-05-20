const { MongoClient, ObjectId } = require("mongodb");
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000; 

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = "mongodb+srv://levidantasgomes:53JCoLRIf8Ig2A4L@eventum.aitfa4v.mongodb.net/?retryWrites=true&w=majority&appName=Eventum";
let db;

async function connectToDatabase() {
    if (db) return db;
    try {
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        db = client.db("unifor");
        console.log("Conectado ao MongoDB Atlas");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
        throw error;
    }
    return db;
}

function createCrudRoutes(router, collectionName) {
    router.get(`/${collectionName}/:id?`, async (req, res) => {
        try {
            const db = await connectToDatabase();
            if (req.params.id) {
                const document = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id) });
                res.json(document);
            } else {
                const documents = await db.collection(collectionName).find().toArray();
                res.json(documents);
            }
        } catch (ex) {
            console.log(ex);
            res.status(400).json({ error: `${ex}` });
        }
    });

    router.post(`/${collectionName}`, async (req, res) => {
        try {
            const document = req.body;
            const db = await connectToDatabase();
            const result = await db.collection(collectionName).insertOne(document);
            res.json(result);
        } catch (ex) {
            console.log(ex);
            res.status(400).json({ error: `${ex}` });
        }
    });

    router.put(`/${collectionName}/:id`, async (req, res) => {
        try {
            const document = req.body;
            const db = await connectToDatabase();
            const result = await db.collection(collectionName).updateOne({ _id: new ObjectId(req.params.id) }, { $set: document });
            res.json(result);
        } catch (ex) {
            console.log(ex);
            res.status(400).json({ error: `${ex}` });
        }
    });

    router.delete(`/${collectionName}/:id`, async (req, res) => {
        try {
            const db = await connectToDatabase();
            const result = await db.collection(collectionName).deleteOne({ _id: new ObjectId(req.params.id) });
            res.json(result);
        } catch (ex) {
            console.log(ex);
            res.status(400).json({ error: `${ex}` });
        }
    });
}

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

const collections = ['Usuario', 'Trabalho', 'Evento', 'Feedback', 'Premiacao', 'Programacao', 'Relatorio', 'Inscricao', 'NivelAcesso', 'Certificado', 'Frequencia'];

collections.forEach(collection => createCrudRoutes(router, collection));

app.use('/', router);

app.listen(port, () => {
    console.log(`API funcionando na porta ${port}`);
});
