import { Request, Response } from 'express';

import { Phrase } from '../models/Phrase';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
};

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor(Math.random() * 10);
    res.json({number: nRand});
};

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome;
    res.json({nome});
};

export const createPhrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;

    let newPhrase = await Phrase.create({ author, txt });

    console.log(req.body);
    res.json({ corpo: req.body });
};