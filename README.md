# Practica CI/CD: Monitoreo y analisis de pipelines con GitHub Actions

Esta carpeta contiene una practica simple para explicar en clase:

- Implementar pruebas distribuidas
- Optimizar el uso de recursos
- Monitorear y ajustar el rendimiento
- Usar GitHub Actions para automatizar el pipeline

## Estructura

- `src/math.js`: funciones de ejemplo
- `test/math.test.js`: pruebas automatizadas
- `.github/workflows/ci.yml`: pipeline de GitHub Actions

## Ejecutar en local

```bash
npm test
npm run demo
```

## Qué muestra esta práctica

1. **Monitoreo**: GitHub Actions muestra logs, versión de Node y estado de cada paso.
2. **Análisis**: si una prueba falla, puedes revisar el log para ver dónde ocurrió.
3. **Optimización**: el pipeline ejecuta solo lo necesario para validar el código.
4. **Pruebas distribuidas**: la idea es que el mismo flujo pueda correr automáticamente cada vez que haya cambios.

## Guion corto para exponer

> "Usamos GitHub Actions porque permite automatizar el pipeline cada vez que se hace un push o una pull request. Primero se descarga el código, luego se configura Node.js y finalmente se ejecutan las pruebas. Si algo falla, GitHub muestra los logs para identificar el problema. Esto nos ayuda a monitorear el pipeline, analizar errores y optimizar el rendimiento del proceso."

