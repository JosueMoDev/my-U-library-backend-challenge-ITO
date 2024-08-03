import { CreateAuthorDto, PatchAuthorDto, MongoId, PaginationDto } from "@domain/dtos";
import { AuthorEntenty, PaginationEntity } from "@domain/entities";

export abstract class AuthorDataSource {
    abstract create(dto: CreateAuthorDto): Promise<AuthorEntenty>;
    abstract patch(dto: PatchAuthorDto): Promise<AuthorEntenty>;
    abstract softDelete(id: MongoId): Promise<boolean>
    abstract hardDelete(id: MongoId): Promise<boolean>
    abstract findOne(id: MongoId): Promise<AuthorEntenty>
    abstract findMany(dto: PaginationDto): Promise<{ pagination:PaginationEntity, authors: AuthorEntenty[] }>
}
