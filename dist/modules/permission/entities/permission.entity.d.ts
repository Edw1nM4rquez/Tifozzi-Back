import { Model } from 'sequelize-typescript';
import { Module } from 'src/modules/module/entities/module.entity';
import { Profile } from 'src/modules/profile/entities/profile.entity';
export declare class Permission extends Model<Permission> {
    access: string;
    create: boolean;
    edit: boolean;
    delete: boolean;
    print: boolean;
    report: boolean;
    others: boolean;
    moduleId: number;
    module: Module;
    profileId: number;
    profile: Profile;
}
