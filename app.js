const { MongoClient, ObjectId } = require("mongodb");
const express = require('express');
const cors = require('cors');

const app = express();         
const port = 3000; // Porta padrão

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexão com MongoDB
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

// Definindo as rotas
const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));


router.get('/Usuario/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Usuario = await db.collection("Usuario").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Usuario);
        } else {
            const Usuario = await db.collection("Usuario").find().toArray();
            res.json(Usuario);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Usuario', async function(req, res) {
    try {
        const Usuario = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Usuario").insertOne(Usuario);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Usuario/:id', async function(req, res) {
    try {
        const Usuario = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Usuario").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Usuario });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Usuario/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Usuario").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Trabalho/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Trabalho = await db.collection("Trabalho").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Trabalho);
        } else {
            const Trabalho = await db.collection("Trabalho").find().toArray();
            res.json(Trabalho);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Trabalho', async function(req, res) {
    try {
        const Trabalho = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Trabalho").insertOne(Trabalho);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Trabalho/:id', async function(req, res) {
    try {
        const Trabalho = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Trabalho").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Trabalho });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Trabalho/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Trabalho").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Evento/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Evento = await db.collection("Evento").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Evento);
        } else {
            const Evento = await db.collection("Evento").find().toArray();
            res.json(Evento);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Evento', async function(req, res) {
    try {
        const Evento = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Evento").insertOne(Evento);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Evento/:id', async function(req, res) {
    try {
        const Evento = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Evento").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Evento });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Evento/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Evento").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Feedback/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Feedback = await db.collection("Feedback").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Feedback);
        } else {
            const Feedback = await db.collection("Feedback").find().toArray();
            res.json(Feedback);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Feedback', async function(req, res) {
    try {
        const Feedback = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Feedback").insertOne(Feedback);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Feedback/:id', async function(req, res) {
    try {
        const Feedback = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Feedback").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Feedback });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Feedback/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Feedback").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Premiacao/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Premiacao = await db.collection("Premiacao").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Premiacao);
        } else {
            const Premiacao = await db.collection("Premiacao").find().toArray();
            res.json(Premiacao);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Premiacao', async function(req, res) {
    try {
        const Premiacao = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Premiacao").insertOne(Premiacao);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Premiacao/:id', async function(req, res) {
    try {
        const Premiacao = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Premiacao").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Premiacao });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Premiacao/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Premiacao").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Programacao/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Programacao = await db.collection("Programacao").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Programacao);
        } else {
            const Programacao = await db.collection("Programacao").find().toArray();
            res.json(Programacao);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Programacao', async function(req, res) {
    try {
        const Programacao = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Programacao").insertOne(Programacao);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Programacao/:id', async function(req, res) {
    try {
        const Programacao = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Programacao").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Programacao });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Programacao/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Programacao").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Relatorio/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Relatorio = await db.collection("Relatorio").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Relatorio);
        } else {
            const Relatorio = await db.collection("Relatorio").find().toArray();
            res.json(Relatorio);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Relatorio', async function(req, res) {
    try {
        const Relatorio = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Relatorio").insertOne(Relatorio);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Relatorio/:id', async function(req, res) {
    try {
        const Relatorio = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Relatorio").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Relatorio });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Relatorio/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Relatorio").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Inscricao/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Inscricao = await db.collection("Inscricao").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Inscricao);
        } else {
            const Inscricao = await db.collection("Inscricao").find().toArray();
            res.json(Inscricao);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/Inscricao', async function(req, res) {
    try {
        const Inscricao = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Inscricao").insertOne(Inscricao);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/Inscricao/:id', async function(req, res) {
    try {
        const Inscricao = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("Inscricao").updateOne({ _id: new ObjectId(req.params.id) }, { $set: Inscricao });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/Inscricao/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("Inscricao").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/NivelAcesso/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const NivelAcesso = await db.collection("NivelAcesso").findOne({ _id: new ObjectId(req.params.id) });
            res.json(NivelAcesso);
        } else {
            const NivelAcesso = await db.collection("NivelAcesso").find().toArray();
            res.json(NivelAcesso);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.post('/NivelAcesso', async function(req, res) {
    try {
        const NivelAcesso = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("NivelAcesso").insertOne(NivelAcesso);
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.put('/NivelAcesso/:id', async function(req, res) {
    try {
        const NivelAcesso = req.body;
        const db = await connectToDatabase();
        const result = await db.collection("NivelAcesso").updateOne({ _id: new ObjectId(req.params.id) }, { $set: NivelAcesso });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.delete('/NivelAcesso/:id', async function(req, res) {
    try {
        const db = await connectToDatabase();
        const result = await db.collection("NivelAcesso").deleteOne({ _id: new ObjectId(req.params.id) });
        res.json(result);
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Certificado/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Certificado = await db.collection("Certificado").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Certificado);
        } else {
            const Certificado = await db.collection("Certificado").find().toArray();
            res.json(Certificado);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

router.get('/Frequencia/:id?', async function(req, res) {
    try {
        const db = await connectToDatabase();
        if (req.params.id) {
            const Frequencia = await db.collection("Frequencia").findOne({ _id: new ObjectId(req.params.id) });
            res.json(Frequencia);
        } else {
            const Frequencia = await db.collection("Frequencia").find().toArray();
            res.json(Frequencia);
        }
    } catch (ex) {
        console.log(ex);
        res.status(400).json({ erro: `${ex}` });
    }
});

app.use('/', router);

// Inicia o servidor
app.listen(port, () => {
    console.log(`API funcionando na porta ${port}`);
});
