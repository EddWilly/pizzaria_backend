import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateDatabaseAndTables1684811759572 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			`CREATE DATABASE IF NOT EXISTS pizzaria`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		
		await queryRunner.query(
			`DROP DATABASE pizzaria;`
		)
	}
}
