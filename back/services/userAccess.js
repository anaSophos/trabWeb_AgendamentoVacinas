import PermissionRepository from "../repositories/PermissionRepository"
import RoleRepository from "../repositories/RoleRepository"
import UserRepository from "../repositories/UserRepository"

export default class RoleService {
    static async execute(userId, roles, permissions){
        const user = await UserRepository.getUserById(userId)
        if(!user){
            return new Error("User does not exists")
        }

        const permissionExists = await PermissionRepository.getPermissionById(permissions)
        const rolesExists = await RoleRepository.getRoleById(roles)

        user.permissions = permissionExists
        user.roles = rolesExists

        UserRepository.save(user)
        return user
    }
}