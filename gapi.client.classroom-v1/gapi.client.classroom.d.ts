// Type definitions for Google Google Classroom API v1
// Project: https://developers.google.com/classroom/
// Definitions by: Bolisov Alexey

/// <reference path="../gapi.client/gapi.client.d.ts" />

declare module gapi.client.classroom.v1 {
    
    interface Course {
        // Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask will result in an error.
        id?: string,
        // Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.
        name?: string,
        // Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.
        section?: string,
        // Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.
        descriptionHeading?: string,
        // Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.
        description?: string,
        // Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.
        room?: string,
        // The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Specifying this field in a course update mask will result in an `INVALID_ARGUMENT` error.
        ownerId?: string,
        // Creation time of the course. Specifying this field in a course update mask will result in an error. Read-only.
        creationTime?: string,
        // Time of the most recent update to this course. Specifying this field in a course update mask will result in an error. Read-only.
        updateTime?: string,
        // Enrollment code to use when joining this course. Specifying this field in a course update mask will result in an error. Read-only.
        enrollmentCode?: string,
        // State of the course. If unspecified, the default state is `PROVISIONED`.
        courseState?: string,
        // Absolute link to this course in the Classroom web UI. Read-only.
        alternateLink?: string,
    }
    
    interface Empty {
    }
    
    interface ListCoursesResponse {
        // Courses that match the list request.
        courses?: Course[],        
        // Token identifying the next page of results to return. If empty, no further results are available.
        nextPageToken?: string,
    }
    
    interface CourseAlias {
        // Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters.
        alias?: string,
    }
    
    interface ListCourseAliasesResponse {
        // The course aliases.
        aliases?: CourseAlias[],        
        // Token identifying the next page of results to return. If empty, no further results are available.
        nextPageToken?: string,
    }
    
    interface Invitation {
        // Identifier assigned by Classroom. Read-only.
        id?: string,
        // Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
        userId?: string,
        // Identifier of the course to invite the user to.
        courseId?: string,
        // Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.
        role?: string,
    }
    
    interface ListInvitationsResponse {
        // Invitations that match the list request.
        invitations?: Invitation[],        
        // Token identifying the next page of results to return. If empty, no further results are available.
        nextPageToken?: string,
    }
    
    interface UserProfile {
        // Identifier of the user. Read-only.
        id?: string,
        // Name of the user. Read-only.
        name?: Name,
        // Email address of the user. Read-only.
        emailAddress?: string,
        // URL of user's profile photo. Read-only.
        photoUrl?: string,
        // Global permissions of the user. Read-only.
        permissions?: GlobalPermission[],        
    }
    
    interface Name {
        // The user's first name. Read-only.
        givenName?: string,
        // The user's last name. Read-only.
        familyName?: string,
        // The user's full name formed by concatenating the first and last name values. Read-only.
        fullName?: string,
    }
    
    interface GlobalPermission {
        // Permission value.
        permission?: string,
    }
    
    interface Teacher {
        // Identifier of the course. Read-only.
        courseId?: string,
        // Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
        userId?: string,
        // Global user information for the teacher. Read-only.
        profile?: UserProfile,
    }
    
    interface ListTeachersResponse {
        // Teachers who match the list request.
        teachers?: Teacher[],        
        // Token identifying the next page of results to return. If empty, no further results are available.
        nextPageToken?: string,
    }
    
    interface Student {
        // Identifier of the course. Read-only.
        courseId?: string,
        // Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
        userId?: string,
        // Global user information for the student. Read-only.
        profile?: UserProfile,
    }
    
    interface ListStudentsResponse {
        // Students who match the list request.
        students?: Student[],        
        // Token identifying the next page of results to return. If empty, no further results are available.
        nextPageToken?: string,
    }
    
    interface AliasesResource {
        // Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists.
        create (request: {        
            // Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
        }) : gapi.client.Request<CourseAlias>;        
        
        // Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist.
        delete (request: {        
            // Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Alias to delete. This may not be the Classroom-assigned identifier.
            alias: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
        list (request: {        
            // The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
            pageSize?: number,
            // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
        }) : gapi.client.Request<ListCourseAliasesResponse>;        
        
    }
    
    
    interface TeachersResource {
        // Creates a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
        create (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
        }) : gapi.client.Request<Teacher>;        
        
        // Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
        get (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Teacher>;        
        
        // Deletes a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course.
        delete (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
        list (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Maximum number of items to return. Zero means no maximum. The server may return fewer than the specified number of results.
            pageSize?: number,
            // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
        }) : gapi.client.Request<ListTeachersResponse>;        
        
    }
    
    
    interface StudentsResource {
        // Adds a user as a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
        create (request: {        
            // Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
            enrollmentCode?: string,
        }) : gapi.client.Request<Student>;        
        
        // Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
        get (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Student>;        
        
        // Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
        delete (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
        list (request: {        
            // Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
            courseId: string,
            // Maximum number of items to return. Zero means no maximum. The server may return fewer than the specified number of results.
            pageSize?: number,
            // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
        }) : gapi.client.Request<ListStudentsResponse>;        
        
    }
    
    
    interface CoursesResource {
        // Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
        create (request: {        
        }) : gapi.client.Request<Course>;        
        
        // Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
        get (request: {        
            // Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
            id: string,
        }) : gapi.client.Request<Course>;        
        
        // Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
        update (request: {        
            // Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
            id: string,
        }) : gapi.client.Request<Course>;        
        
        // Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
        patch (request: {        
            // Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
            id: string,
            // Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` When set in a query parameter, this field should be specified as `updateMask=,,...`
            updateMask?: string,
        }) : gapi.client.Request<Course>;        
        
        // Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
        delete (request: {        
            // Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
        list (request: {        
            // Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            studentId?: string,
            // Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            teacherId?: string,
            // Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
            pageSize?: number,
            // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
        }) : gapi.client.Request<ListCoursesResponse>;        
        
        aliases: AliasesResource,
        teachers: TeachersResource,
        students: StudentsResource,
    }
    
    
    interface InvitationsResource {
        // Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled or if the user already has this role or a role with greater permissions. * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
        create (request: {        
        }) : gapi.client.Request<Invitation>;        
        
        // Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
        get (request: {        
            // Identifier of the invitation to return.
            id: string,
        }) : gapi.client.Request<Invitation>;        
        
        // Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
        delete (request: {        
            // Identifier of the invitation to delete.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
        // Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.
        list (request: {        
            // Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            userId?: string,
            // Restricts returned invitations to those for a course with the specified identifier.
            courseId?: string,
            // Maximum number of items to return. Zero means no maximum. The server may return fewer than the specified number of results.
            pageSize?: number,
            // nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
            pageToken?: string,
        }) : gapi.client.Request<ListInvitationsResponse>;        
        
        // Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
        accept (request: {        
            // Identifier of the invitation to accept.
            id: string,
        }) : gapi.client.Request<Empty>;        
        
    }
    
    
    interface UserProfilesResource {
        // Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile or if no profile exists with the requested ID or for access errors.
        get (request: {        
            // Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
            userId: string,
        }) : gapi.client.Request<UserProfile>;        
        
    }
    
}

declare module gapi.client.classroom {
    var courses: gapi.client.classroom.v1.CoursesResource; 
    
    var invitations: gapi.client.classroom.v1.InvitationsResource; 
    
    var userProfiles: gapi.client.classroom.v1.UserProfilesResource; 
    
}
