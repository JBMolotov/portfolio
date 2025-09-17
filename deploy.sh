#!/bin/bash
# Script para publicar o portfolio no GitHub Pages

# Cores para feedback visual
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Iniciando processo de publicação no GitHub Pages...${NC}"

# Verificar se git está instalado
if ! command -v git &> /dev/null
then
    echo -e "${YELLOW}Git não está instalado. Por favor instale git primeiro.${NC}"
    exit 1
fi

# Verificar se estamos em um repositório git
if [ ! -d .git ]
then
    echo -e "${YELLOW}Inicializando repositório git...${NC}"
    git init
fi

# Adicionar arquivos ao git
echo -e "${YELLOW}Adicionando arquivos ao repositório...${NC}"
git add .

# Commit das alterações
echo -e "${YELLOW}Criando commit...${NC}"
read -p "Digite a mensagem do commit (ex: 'Atualização do portfolio'): " commit_message
git commit -m "$commit_message"

# Verificar se branch main/master existe e criar se necessário
current_branch=$(git branch --show-current)
if [ -z "$current_branch" ]
then
    echo -e "${YELLOW}Criando branch main...${NC}"
    git checkout -b main
fi

# Verificar se um remote já está configurado
remote_exists=$(git remote)
if [ -z "$remote_exists" ]
then
    echo -e "${YELLOW}Adicionando remote origin...${NC}"
    read -p "Digite a URL do seu repositório GitHub (ex: https://github.com/seuusername/portfolio.git): " repo_url
    git remote add origin "$repo_url"
fi

# Push para o GitHub
echo -e "${YELLOW}Enviando para o GitHub...${NC}"
git push -u origin main

echo -e "${GREEN}Arquivos enviados para o GitHub com sucesso!${NC}"
echo -e "${YELLOW}Para ativar o GitHub Pages:${NC}"
echo -e "1. Acesse seu repositório no GitHub"
echo -e "2. Vá para 'Settings' > 'Pages'"
echo -e "3. Na seção 'Source', selecione a branch 'main'"
echo -e "4. Clique em 'Save'"
echo -e "${GREEN}Seu portfolio estará disponível em breve em https://seuusername.github.io/portfolio/${NC}"

exit 0
