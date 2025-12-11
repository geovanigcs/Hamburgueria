#!/bin/bash

# Script para gerenciar a aplicação Hamburgueria

case "$1" in
  start)
    echo "🚀 Iniciando aplicação..."
    docker-compose up -d
    echo "✅ Aplicação rodando em http://localhost:3000"
    ;;
  stop)
    echo "⏹️  Parando aplicação..."
    docker-compose down
    echo "✅ Aplicação parada"
    ;;
  restart)
    echo "🔄 Reiniciando aplicação..."
    docker-compose restart
    echo "✅ Aplicação reiniciada"
    ;;
  logs)
    docker-compose logs -f
    ;;
  build)
    echo "🔨 Reconstruindo imagens..."
    docker-compose build --no-cache
    echo "✅ Imagens reconstruídas"
    ;;
  clean)
    echo "🧹 Limpando containers e volumes..."
    docker-compose down -v
    echo "✅ Limpeza concluída"
    ;;
  db)
    echo "🗄️  Acessando banco de dados..."
    docker-compose exec db psql -U user -d hamburgueria
    ;;
  migrate)
    echo "📦 Executando migrations..."
    docker-compose exec app npx prisma migrate deploy
    echo "✅ Migrations executadas"
    ;;
  seed)
    echo "🌱 Populando banco de dados..."
    docker-compose exec app npx prisma db seed
    echo "✅ Banco de dados populado"
    ;;
  studio)
    echo "🎨 Abrindo Prisma Studio..."
    npx prisma studio
    ;;
  *)
    echo "Uso: ./docker.sh {start|stop|restart|logs|build|clean|db|migrate|seed|studio}"
    echo ""
    echo "Comandos disponíveis:"
    echo "  start    - Inicia a aplicação"
    echo "  stop     - Para a aplicação"
    echo "  restart  - Reinicia a aplicação"
    echo "  logs     - Mostra os logs em tempo real"
    echo "  build    - Reconstrói as imagens Docker"
    echo "  clean    - Remove containers e volumes"
    echo "  db       - Acessa o banco de dados PostgreSQL"
    echo "  migrate  - Executa as migrations"
    echo "  seed     - Popula o banco de dados"
    echo "  studio   - Abre o Prisma Studio"
    exit 1
    ;;
esac

exit 0
