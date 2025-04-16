// Importación de decoradores y módulos necesarios de NestJS
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Importación de la configuración personalizada y del módulo de encuestas
import configuration from './config/configuration';
import { EncuestasModule } from './modules/encuestas/encuestas.module';

@Module({
  // Configuración de los módulos que se importan en la aplicación
  imports: [
    // Importación del módulo de encuestas
    EncuestasModule,

    // Configuración del módulo de configuración global
    ConfigModule.forRoot({
      load: [configuration], // Carga la configuración personalizada desde un archivo
      isGlobal: true, // Hace que el módulo de configuración sea accesible globalmente
      ignoreEnvFile: process.env.NODE_ENV === 'production', // Ignora el archivo .env si el entorno es producción
    }),
  ],
})
// Declaración del módulo principal de la aplicación
export class AppModule {}
