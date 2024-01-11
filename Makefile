ifneq (,$(wildcard ./package/**/.env))
	include .env
	export
	ENV_FILE_PARAM=--env-file .env
endif

config:
	docker-compose config

build:
	docker-compose build

up:	
	docker image prune -f && docker-compose up --build

down:
	docker-compose down

delete:
	docker-compose down --rmi all

restart:
	docker-compose restart

logs:
	docker-compose logs -f

ps:
	docker ps

exec:
	docker-compose exec -it $(service) sh

volume:
	docker volume ls

delete-volume:
	docker volume prune -f

clean: delete delete-volume