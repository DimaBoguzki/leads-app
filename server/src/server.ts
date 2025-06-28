import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import leadRoutes from './api/v1/lead/lead.route';

dotenv.config( { path: path.resolve( __dirname, '../.env' ) } );

const app = express();

const PORT = process.env.PORT || 5000;

app.use( express.json() );
app.use( cors( { origin: process?.env?.CLIENT_ORIGIN || 'http://localhost:5173' } ) );
app.use( '/api/v1/leads', leadRoutes );

const clientBuildPath = path.join( __dirname, '../client/dist' );
app.use( express.static( clientBuildPath ) );

app.get( '*', ( _req, res ) => {
  res.sendFile( path.join( clientBuildPath, 'index.html' ) );
} );

connectDB().then( () => {
  app.listen( PORT, () => {
    console.log( `🚀 Server running at http://localhost:${PORT}` );
  } );
} );