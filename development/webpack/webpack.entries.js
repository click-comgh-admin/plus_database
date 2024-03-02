module.exports = {
    "login": {
        import: './src/view/wireframe/index.ts',
        dependOn: 'shared',
    },
    "login": {
        import: './src/view/login/index.ts',
        dependOn: 'shared',
    },
    "redirect": {
        import: './src/view/redirect/index.ts',
        dependOn: 'shared',
    },
    "client/register": {
        import: './src/view/admin/client/index.ts',
        dependOn: 'shared',
    },
    "home/branch": {
        import: './src/view/home/branch/index.ts',
        dependOn: 'shared',
    },
    "home/branch/btn": {
        import: './src/view/home/branch/button.ts',
        dependOn: 'shared',
    },
    "home/dashboard": {
        import: './src/view/home/dashboard/index.ts',
        dependOn: 'shared',
    },

    "membership/registration/excel": {
        import: './src/view/membership/registration/excel/index.ts',
        dependOn: 'shared',
    },
    "membership/registration/organization-excel": {
        import: './src/view/membership/registration/excel/organization.ts',
        dependOn: 'shared',
    },
    "membership/groupings/branches/all": {
        import: './src/view/membership/groupings/branches/index.ts',
        dependOn: 'shared',
    },
    "membership/groupings/branches/one": {
        import: './src/view/membership/groupings/branches/one.ts',
        dependOn: 'shared',
    },
    "membership/groupings/branches/add": {
        import: './src/view/membership/groupings/branches/add.ts',
        dependOn: 'shared',
    },
    "membership/groupings/branches/edit": {
        import: './src/view/membership/groupings/branches/edit.ts',
        dependOn: 'shared',
    },
    "membership/groupings/member_categories/all": {
        import: './src/view/membership/groupings/member_categories/index.ts',
        dependOn: 'shared',
    },
    "membership/groupings/member_categories/one": {
        import: './src/view/membership/groupings/member_categories/one.ts',
        dependOn: 'shared',
    },
    "membership/groupings/member_categories/add": {
        import: './src/view/membership/groupings/member_categories/add.ts',
        dependOn: 'shared',
    },
    "membership/groupings/member_categories/edit": {
        import: './src/view/membership/groupings/member_categories/edit.ts',
        dependOn: 'shared',
    },

    "membership/groupings/bulk_assignment/member_categories": {
        import: './src/view/membership/groupings/bulk_assignment/member_categories/view.ts',
        dependOn: 'shared',
    },
    "membership/groupings/bulk_assignment/member_categories/add": {
        import: './src/view/membership/groupings/bulk_assignment/member_categories/add.ts',
        dependOn: 'shared',
    },
    "membership/groupings/bulk_assignment/groups": {
        import: './src/view/membership/groupings/bulk_assignment/groups/view.ts',
        dependOn: 'shared',
    },
    "membership/groupings/bulk_assignment/groups/add": {
        import: './src/view/membership/groupings/bulk_assignment/groups/add.ts',
        dependOn: 'shared',
    },
    "membership/groupings/bulk_assignment/subgroups": {
        import: './src/view/membership/groupings/bulk_assignment/subgroups/view.ts',
        dependOn: 'shared',
    },
    "membership/groupings/bulk_assignment/subgroups/add": {
        import: './src/view/membership/groupings/bulk_assignment/subgroups/add.ts',
        dependOn: 'shared',
    },

    "membership/groupings/group_subgroup/groups": {
        import: './src/view/membership/groupings/group_subgroup/groups/view.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/groups/add": {
        import: './src/view/membership/groupings/group_subgroup/groups/add.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/groups/add-bulk": {
        import: './src/view/membership/groupings/group_subgroup/groups/add-bulk.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/groups/edit": {
        import: './src/view/membership/groupings/group_subgroup/groups/edit.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/subgroups": {
        import: './src/view/membership/groupings/group_subgroup/subgroups/view.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/subgroups/add": {
        import: './src/view/membership/groupings/group_subgroup/subgroups/add.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/subgroups/add-bulk": {
        import: './src/view/membership/groupings/group_subgroup/subgroups/add-bulk.ts',
        dependOn: 'shared',
    },
    "membership/groupings/group_subgroup/subgroups/edit": {
        import: './src/view/membership/groupings/group_subgroup/subgroups/edit.ts',
        dependOn: 'shared',
    },

    "membership/access_restriction/select_restriction": {
        import: './src/view/membership/access_restriction/select_restriction.ts',
        dependOn: 'shared',
    },
    "membership/access_restriction/select_restriction/view": {
        import: './src/view/membership/access_restriction/view.ts',
        dependOn: 'shared',
    },
    "membership/access_restriction/select_restriction/update": {
        import: './src/view/membership/access_restriction/update.ts',
        dependOn: 'shared',
    },

    "membership/members/all": {
        import: './src/view/membership/members/index.ts',
        dependOn: 'shared',
    },
    "membership/members/all-organizations": {
        import: './src/view/membership/members/organization/index.ts',
        dependOn: 'shared',
    },
    "membership/members/select-member-type": {
        import: './src/view/membership/members/select-member-type/index.ts',
        dependOn: 'shared',
    },
    "membership/members/profile_photo": {
        import: './src/view/membership/members/profile_photo/index.ts',
        dependOn: 'shared',
    },
    "membership/members/member": {
        import: './src/view/membership/members/member.ts',
        dependOn: 'shared',
    },
    "membership/members/member-organization": {
        import: './src/view/membership/members/organization/member.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/individual/photo": {
        import: './src/view/membership/members/edit/individual/photo.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/organization/photo": {
        import: './src/view/membership/members/edit/organization/photo.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/individual/contact": {
        import: './src/view/membership/members/edit/individual/contact.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/organization/contact": {
        import: './src/view/membership/members/edit/organization/contact.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/individual/bio-data": {
        import: './src/view/membership/members/edit/individual/bio-data.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/organization/bio-data": {
        import: './src/view/membership/members/edit/organization/bio-data.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/individual/group-subgroup": {
        import: './src/view/membership/members/edit/individual/group-subgroup.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/organization/group-subgroup": {
        import: './src/view/membership/members/edit/organization/group-subgroup.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/individual/branch-category-status-location": {
        import: './src/view/membership/members/edit/individual/branch-category-status-location.ts',
        dependOn: 'shared',
    },
    "membership/members/edit/organization/branch-category-status-location": {
        import: './src/view/membership/members/edit/organization/branch-category-status-location.ts',
        dependOn: 'shared',
    },
    // "membership/members/edit": {
    //     import: './src/view/membership/members/edit.ts',
    //     dependOn: 'shared',
    // },
    "membership/connections/accounts": {
        import: './src/view/membership/connections/index.ts',
        dependOn: 'shared',
    },
    "membership/connections/types": {
        import: './src/view/membership/connections/types.ts',
        dependOn: 'shared',
    },
    "membership/connections/type-add": {
        import: './src/view/membership/connections/type-add.ts',
        dependOn: 'shared',
    },
    "membership/connections/member": {
        import: './src/view/membership/connections/members.ts',
        dependOn: 'shared',
    },
    "membership/connections/connection": {
        import: './src/view/membership/connections/connections.ts',
        dependOn: 'shared',
    },
    "membership/connections/connection-add": {
        import: './src/view/membership/connections/connection-add.ts',
        dependOn: 'shared',
    },
    "membership/connections/rejected": {
        import: './src/view/membership/connections/list-rejected.ts',
        dependOn: 'shared',
    },
    "membership/connections/unassigned": {
        import: './src/view/membership/connections/list-unassigned.ts',
        dependOn: 'shared',
    },
    "membership/id-prefix/member-prefix": {
        import: './src/view/membership/id-prefix/member-prefix.ts',
        dependOn: 'shared',
    },
    "membership/id-prefix/category-prefix": {
        import: './src/view/membership/id-prefix/category-prefix.ts',
        dependOn: 'shared',
    },
    "membership/id-prefix/branch-prefix": {
        import: './src/view/membership/id-prefix/branch-prefix.ts',
        dependOn: 'shared',
    },
    "membership/verification/individuals": {
        import: './src/view/membership/verification/individuals/index.ts',
        dependOn: 'shared',
    },
    "membership/verification/organizations": {
        import: './src/view/membership/verification/organizations/index.ts',
        dependOn: 'shared',
    },
    "admin/user/all": {
        import: './src/view/admin/user/index.ts',
        dependOn: 'shared',
    },
    "admin/user/view": {
        import: './src/view/admin/user/view.ts',
        dependOn: 'shared',
    },
    "admin/user/add": {
        import: './src/view/admin/user/add.ts',
        dependOn: 'shared',
    },
    "admin/user/edit": {
        import: './src/view/admin/user/edit.ts',
        dependOn: 'shared',
    },
    "admin/user/edit_photo": {
        import: './src/view/admin/user/edit_photo.ts',
        dependOn: 'shared',
    },
    "admin/user/add_group_subgroup": {
        import: './src/view/admin/user/add_group_subgroup.ts',
        dependOn: 'shared',
    },
    "admin/user/edit_group_subgroup": {
        import: './src/view/admin/user/edit_group_subgroup.ts',
        dependOn: 'shared',
    },
    "additional-registration/creator/view": {
        import: './src/view/additional-registration/creator/view.ts',
        dependOn: 'shared',
    },
    "additional-registration/creator/form": {
        import: './src/view/additional-registration/creator/form.ts',
        dependOn: 'shared',
    },
    "additional-registration/creator/edit": {
        import: './src/view/additional-registration/creator/edit.ts',
        dependOn: 'shared',
    },
    "additional-registration/members/view": {
        import: './src/view/additional-registration/members/view.ts',
        dependOn: 'shared',
    },

    shared: 'lodash',
};