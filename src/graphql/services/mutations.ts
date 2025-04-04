import { gql } from '@apollo/client';

// App & Notification Mutations
export const APP_NOTIFICATION_GET_DETAIL = gql`
  mutation AppNotificationGetDetail($id: String!) {
    appNotificationGetDetail(id: $id) {
      id
      title
      content
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const APP_NOTIFICATION_REMOVE = gql`
  mutation AppNotificationRemove($id: String!) {
    appNotificationRemove(id: $id) {
      id
      title
      content
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const APP_NOTIFICATION_UPDATE = gql`
  mutation AppNotificationUpdate($arguments: AppNotificationUpdateArgs!) {
    appNotificationUpdate(arguments: $arguments) {
      id
      title
      content
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const APP_NOTIFICATION_UPDATE_ALL = gql`
  mutation AppNotificationUpdateAll($arguments: AppNotificationUpdateAllArgs!) {
    appNotificationUpdateAll(arguments: $arguments) {
      success
      message
    }
  }
`;

// Chat Mutations
export const CHAT_CONVERSATION_DELETE = gql`
  mutation ChatConversationDelete($id: String!) {
    chatConversationDelete(id: $id) {
      id
      conversationId
      userId
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_CONVERSATION_LEAVE = gql`
  mutation ChatConversationLeave($id: String!) {
    chatConversationLeave(id: $id) {
      id
      title
      type
      participants {
        id
        name
        avatar
      }
      lastMessage {
        id
        content
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_GROUP_ADD = gql`
  mutation ChatGroupAdd($input: ChatGroupAddInput!) {
    chatGroupAdd(input: $input) {
      id
      title
      type
      participants {
        id
        name
        avatar
      }
      lastMessage {
        id
        content
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_GROUP_EDIT = gql`
  mutation ChatGroupEdit($input: ChatGroupEditInput!) {
    chatGroupEdit(input: $input) {
      id
      title
      type
      participants {
        id
        name
        avatar
      }
      lastMessage {
        id
        content
        createdAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_MESSAGE_ADD = gql`
  mutation ChatMessageAdd($input: ChatMessageAddInput!) {
    chatMessageAdd(input: $input) {
      id
      content
      type
      sender {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_MESSAGE_DELETE_HISTORY = gql`
  mutation ChatMessageDeleteHistory($id: String!) {
    chatMessageDeleteHistory(id: $id) {
      id
      conversationId
      userId
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_MESSAGE_EDIT = gql`
  mutation ChatMessageEdit($input: ChatMessageEditInput!) {
    chatMessageEdit(input: $input) {
      id
      content
      type
      sender {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_MESSAGE_UPDATE_REACTION = gql`
  mutation ChatMessageUpdateReaction($input: ChatMessageUpdateReactionInput!) {
    chatMessageUpdateReaction(input: $input) {
      id
      content
      type
      sender {
        id
        name
        avatar
      }
      reactions {
        userId
        reaction
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_MESSAGE_UPDATE_READ = gql`
  mutation ChatMessageUpdateRead($input: ChatMessageUpdateReadInput!) {
    chatMessageUpdateRead(input: $input) {
      success
      message
    }
  }
`;

// Check-in Mutations
export const CHECK_IN_ADD_PLACE = gql`
  mutation CheckInAddPlace($input: CheckInPlaceInput!) {
    checkInAddPlace(input: $input) {
      id
      name
      address
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_BEACON = gql`
  mutation CheckInBeacon($input: CheckInBeaconInput!) {
    checkInBeacon(input: $input) {
      id
      userId
      placeId
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_EDIT_BEACON = gql`
  mutation CheckInEditBeacon($input: CheckInBeaconInput!) {
    checkInEditBeacon(input: $input) {
      id
      userId
      placeId
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_EDIT_PLACE = gql`
  mutation CheckInEditPlace($input: CheckInPlaceInput!) {
    checkInEditPlace(input: $input) {
      id
      name
      address
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_REMOVE_BEACON = gql`
  mutation CheckInRemoveBeacon($id: String!) {
    checkInRemoveBeacon(id: $id) {
      id
      userId
      placeId
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_REMOVE_PLACE = gql`
  mutation CheckInRemovePlace($id: String!) {
    checkInRemovePlace(id: $id) {
      id
      name
      address
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_SYNC_BEACON = gql`
  mutation CheckInSyncBeacon($input: [CheckInBeaconInput!]!) {
    checkInSyncBeacon(input: $input) {
      id
      userId
      placeId
      type
      status
      createdAt
      updatedAt
    }
  }
`;

// Document Mutations
export const DOCUMENT_ADD_FOLDER = gql`
  mutation DocumentAddFolder($arguments: DocumentFolderArgs!) {
    documentAddFolder(arguments: $arguments) {
      id
      name
      parentId
      type
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_COPY_FILE = gql`
  mutation DocumentCopyFile($fileId: String!, $folderId: String, $override: Boolean) {
    documentCopyFile(fileId: $fileId, folderId: $folderId, override: $override) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_DELETE_FILE = gql`
  mutation DocumentDeleteFile($fileId: String!) {
    documentDeleteFile(fileId: $fileId) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_DELETE_FOLDER = gql`
  mutation DocumentDeleteFolder($folderId: String!) {
    documentDeleteFolder(folderId: $folderId) {
      id
      name
      parentId
      type
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_EDIT_FOLDER = gql`
  mutation DocumentEditFolder($arguments: DocumentFolderArgs!) {
    documentEditFolder(arguments: $arguments) {
      id
      name
      parentId
      type
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_GEN_LINK_UPLOAD = gql`
  mutation DocumentGenLinkUpload($filename: String!, $folderId: String, $mimetype: String, $override: Boolean) {
    documentGenLinkUpload(filename: $filename, folderId: $folderId, mimetype: $mimetype, override: $override) {
      url
      fields
    }
  }
`;

export const DOCUMENT_MOVE_FILE = gql`
  mutation DocumentMoveFile($fileId: String!, $folderId: String, $override: Boolean) {
    documentMoveFile(fileId: $fileId, folderId: $folderId, override: $override) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_RENAME_FILE = gql`
  mutation DocumentRenameFile($fileId: String!, $name: String!, $override: Boolean) {
    documentRenameFile(fileId: $fileId, name: $name, override: $override) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_UPLOAD_FILE = gql`
  mutation DocumentUploadFile($file: Upload!, $folderId: String, $override: Boolean) {
    documentUploadFile(file: $file, folderId: $folderId, override: $override) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_UPLOAD_FILE_SUCCESS = gql`
  mutation DocumentUploadFileSuccess($encoding: String!, $filename: String!, $folderId: String, $mimetype: String!, $path: String!) {
    documentUploadFileSuccess(encoding: $encoding, filename: $filename, folderId: $folderId, mimetype: $mimetype, path: $path) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

// Identity & Authentication Mutations
export const IDENTITY_CHANGE_PASSWORD = gql`
  mutation IdentityChangePassword($input: ChangePasswordInput!) {
    identityChangePassword(input: $input) {
      success
      message
    }
  }
`;

export const IDENTITY_LOGOUT = gql`
  mutation IdentityLogout {
    identityLogout {
      id
      name
      email
      phone
      avatar
      createdAt
      updatedAt
    }
  }
`;

export const IDENTITY_OFFICE_LOGIN = gql`
  mutation IdentityOfficeLogin($input: OfficeLoginInput!) {
    identityOfficeLogin(input: $input) {
      success
      message
      token
      user {
        id
        name
        email
        phone
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;

export const IDENTITY_OFFICE_PHONE_CHALLENGE = gql`
  mutation IdentityOfficePhoneChallenge($input: PhoneChallengeInput!) {
    identityOfficePhoneChallenge(input: $input) {
      success
      message
      otp
    }
  }
`;

export const IDENTITY_REFRESH_TOKEN = gql`
  mutation IdentityRefreshToken {
    identityRefreshToken {
      success
      message
      token
      user {
        id
        name
        email
        phone
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;

export const IDENTITY_SET_PASSWORD = gql`
  mutation IdentitySetPassword($input: SetPasswordInput!) {
    identitySetPassword(input: $input) {
      success
      message
    }
  }
`;

export const IDENTITY_SYS_LOGIN = gql`
  mutation IdentitySysLogin($input: SysLoginInput!) {
    identitySysLogin(input: $input) {
      success
      message
      token
      user {
        id
        name
        email
        phone
        avatar
        createdAt
        updatedAt
      }
    }
  }
`;

export const IDENTITY_VERIFY_FORGOT_PASSWORD = gql`
  mutation IdentityVerifyForgotPassword($input: VerifyForgotPasswordInput!) {
    identityVerifyForgotPassword(input: $input) {
      success
      message
    }
  }
`;

// Learning Management Mutations
export const LEARNING_ADDRESS_CREATE = gql`
  mutation LearningAddressCreate($input: LearningAddressCreateInput!) {
    manageLearningAddressCreate(input: $input) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_ADDRESS_REMOVE = gql`
  mutation LearningAddressRemove($id: String!) {
    manageLearningAddressRemove(id: $id)
  }
`;

export const LEARNING_ADDRESS_UPDATE = gql`
  mutation LearningAddressUpdate($input: LearningAddressUpdateInput!) {
    manageLearningAddressUpdate(input: $input) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_ADDRESS_UPSERT = gql`
  mutation LearningAddressUpsert($input: LearningAddressUpsertInput!) {
    manageLearningAddressUpsert(input: $input) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

// Learning Management Mutations (continued)
export const LEARNING_CERTIFICATE_CREATE = gql`
  mutation LearningCertificateCreate($input: LearningCertificateCreateInput!) {
    manageLearningCertificateCreate(input: $input) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_CERTIFICATE_REMOVE = gql`
  mutation LearningCertificateRemove($id: String!) {
    manageLearningCertificateRemove(id: $id)
  }
`;

export const LEARNING_CERTIFICATE_UPDATE = gql`
  mutation LearningCertificateUpdate($input: LearningCertificateUpdateInput!) {
    manageLearningCertificateUpdate(input: $input) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_CERTIFICATE_UPSERT = gql`
  mutation LearningCertificateUpsert($input: LearningCertificateUpsertInput!) {
    manageLearningCertificateUpsert(input: $input) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_COURSE_CREATE = gql`
  mutation LearningCourseCreate($input: LearningCourseCreateInput!) {
    manageLearningCourseCreate(input: $input) {
      id
      name
      description
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_COURSE_REORDER_SECTION = gql`
  mutation LearningCourseReOrderSection($input: LearningCourseReOrderSectionInput!) {
    manageLearningCourseReOrderSection(input: $input) {
      id
      name
      description
      type
      status
      sections {
        id
        name
        order
      }
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_COURSE_REMOVE = gql`
  mutation LearningCourseRemove($id: String!) {
    manageLearningCourseRemove(id: $id)
  }
`;

export const LEARNING_COURSE_UPDATE = gql`
  mutation LearningCourseUpdate($input: LearningCourseUpdateInput!) {
    manageLearningCourseUpdate(input: $input) {
      id
      name
      description
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const LEARNING_COURSE_UPSERT = gql`
  mutation LearningCourseUpsert($input: LearningCourseUpsertInput!) {
    manageLearningCourseUpsert(input: $input) {
      id
      name
      description
      type
      status
      createdAt
      updatedAt
    }
  }
`;

// Wiki Management Mutations
export const WIKI_CATEGORY_CREATE = gql`
  mutation WikiCategoryCreate($input: WikiCategoryCreateInput!) {
    manageWikiCategoryCreate(input: $input) {
      id
      name
      description
      parentId
      createdAt
      updatedAt
    }
  }
`;

export const WIKI_CATEGORY_REMOVE = gql`
  mutation WikiCategoryRemove($id: String!) {
    manageWikiCategoryRemove(id: $id)
  }
`;

export const WIKI_CATEGORY_UPDATE = gql`
  mutation WikiCategoryUpdate($input: WikiCategoryUpdateInput!) {
    manageWikiCategoryUpdate(input: $input) {
      id
      name
      description
      parentId
      createdAt
      updatedAt
    }
  }
`;

export const WIKI_CATEGORY_UPSERT = gql`
  mutation WikiCategoryUpsert($input: WikiCategoryUpsertInput!) {
    manageWikiCategoryUpsert(input: $input) {
      id
      name
      description
      parentId
      createdAt
      updatedAt
    }
  }
`;

export const WIKI_CREATE = gql`
  mutation WikiCreate($input: WikiCreateInput!) {
    manageWikiCreate(input: $input) {
      id
      title
      content
      categoryId
      author {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const WIKI_UPDATE = gql`
  mutation WikiUpdate($input: WikiUpdateInput!) {
    manageWikiUpdate(input: $input) {
      id
      title
      content
      categoryId
      author {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const WIKI_REMOVE = gql`
  mutation WikiRemove($id: String!) {
    manageWikiRemove(id: $id)
  }
`;

export const WIKI_SET_IMPORTANT = gql`
  mutation WikiSetImportant($id: String!) {
    manageWikiSetImportant(id: $id) {
      id
      title
      content
      categoryId
      isImportant
      author {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

// Employee & Organization Management Mutations
export const EMPLOYEE_ADD = gql`
  mutation EmployeeAdd($input: EmployeeAddInput!) {
    managementAddEmployee(input: $input) {
      id
      name
      email
      phone
      avatar
      department
      position
      createdAt
      updatedAt
    }
  }
`;

export const ORG_CHART_ADD = gql`
  mutation OrgChartAdd($input: OrgChartAddInput!) {
    managementAddOrgChart(input: $input) {
      id
      name
      parentId
      type
      createdAt
      updatedAt
    }
  }
`;

export const EMPLOYEE_EDIT = gql`
  mutation EmployeeEdit($input: EmployeeEditInput!) {
    managementEditEmployee(input: $input) {
      id
      name
      email
      phone
      avatar
      department
      position
      createdAt
      updatedAt
    }
  }
`;

export const ORG_CHART_EDIT = gql`
  mutation OrgChartEdit($input: OrgChartEditInput!) {
    managementEditOrgChart(input: $input) {
      id
      name
      parentId
      type
      createdAt
      updatedAt
    }
  }
`;

export const EMPLOYEE_BULK_CREATE = gql`
  mutation EmployeeBulkCreate($input: EmployeeBulkCreateInput!) {
    managementEmployeeBulkCreate(input: $input) {
      success
      message
      data {
        id
        name
        email
        phone
        department
        position
      }
    }
  }
`;

export const EMPLOYEE_BULK_UPSERT = gql`
  mutation EmployeeBulkUpsert($input: EmployeeBulkUpsertInput!) {
    managementEmployeeBulkUpsert(input: $input) {
      success
      message
      data {
        id
        name
        email
        phone
        department
        position
      }
    }
  }
`;

// Asset Management Mutations
export const ASSET_CREATE = gql`
  mutation AssetCreate($input: AssetCreateInput!) {
    managerAssetCreate(input: $input) {
      id
      name
      type
      status
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const ASSET_REMOVE = gql`
  mutation AssetRemove($id: String!) {
    managerAssetRemove(id: $id)
  }
`;

export const ASSET_UPDATE = gql`
  mutation AssetUpdate($input: AssetUpdateInput!) {
    managerAssetUpdate(input: $input) {
      id
      name
      type
      status
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

// Payroll & Paycheck Mutations
export const PAYROLL_CREATE = gql`
  mutation PayrollCreate($input: PayrollCreateInput!) {
    managementPayrollCreate(input: $input) {
      id
      employee {
        id
        name
      }
      amount
      status
      period
      createdAt
      updatedAt
    }
  }
`;

export const PAYROLL_UPDATE = gql`
  mutation PayrollUpdate($input: PayrollUpdateInput!) {
    managementPayrollUpdate(input: $input) {
      id
      employee {
        id
        name
      }
      amount
      status
      period
      createdAt
      updatedAt
    }
  }
`;

export const PAYCHECK_CREATE = gql`
  mutation PaycheckCreate($input: PaycheckCreateInput!) {
    managementUserPaycheckCreate(input: $input) {
      id
      user {
        id
        name
      }
      amount
      status
      period
      createdAt
      updatedAt
    }
  }
`;

export const PAYCHECK_UPDATE = gql`
  mutation PaycheckUpdate($input: PaycheckUpdateInput!) {
    managementUserPaycheckUpdate(input: $input) {
      id
      user {
        id
        name
      }
      amount
      status
      period
      createdAt
      updatedAt
    }
  }
`;

// Work Profile Mutations
export const WORK_PROFILE_CREATE = gql`
  mutation WorkProfileCreate($input: WorkProfileCreateInput!) {
    managementWorkProfileCreate(input: $input) {
      id
      name
      type
      fields {
        id
        name
        type
        value
      }
      createdAt
      updatedAt
    }
  }
`;

export const WORK_PROFILE_UPDATE = gql`
  mutation WorkProfileUpdate($input: WorkProfileUpdateInput!) {
    managementWorkProfileUpdate(input: $input) {
      id
      name
      type
      fields {
        id
        name
        type
        value
      }
      createdAt
      updatedAt
    }
  }
`;

// Approval & Form Mutations
export const APPROVAL_FORM_GROUP_CREATE = gql`
  mutation ApprovalFormGroupCreate($input: ApprovalFormGroupCreateInput!) {
    managerApprovalFormGroupCreate(input: $input) {
      id
      name
      description
      forms {
        id
        name
        type
      }
      createdAt
      updatedAt
    }
  }
`;

export const APPROVAL_FORM_GROUP_REMOVE = gql`
  mutation ApprovalFormGroupRemove($id: String!) {
    managerApprovalFormGroupRemove(id: $id)
  }
`;

export const APPROVAL_FORM_GROUP_UPDATE = gql`
  mutation ApprovalFormGroupUpdate($input: ApprovalFormGroupUpdateInput!) {
    managerApprovalFormGroupUpdate(input: $input) {
      id
      name
      description
      forms {
        id
        name
        type
      }
      createdAt
      updatedAt
    }
  }
`;

// Car & Meeting Room Mutations
export const CAR_ADD = gql`
  mutation CarAdd($input: CarAddInput!) {
    officeAddCar(input: $input) {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const CAR_BOOK = gql`
  mutation CarBook($input: CarBookInput!) {
    officeBookCar(input: $input) {
      success
      message
      booking {
        id
        carId
        userId
        startTime
        endTime
        status
        createdAt
        updatedAt
      }
    }
  }
`;

export const MEETING_ROOM_BOOK = gql`
  mutation MeetingRoomBook($input: MeetingRoomBookInput!) {
    officeBookMeetingRoom(input: $input) {
      success
      message
      booking {
        id
        roomId
        userId
        startTime
        endTime
        status
        createdAt
        updatedAt
      }
    }
  }
`;

export const MEETING_ROOM_CREATE = gql`
  mutation MeetingRoomCreate($input: MeetingRoomCreateInput!) {
    officeCreateMeetingRoom(input: $input) {
      id
      name
      capacity
      facilities
      status
      createdAt
      updatedAt
    }
  }
`;

// Task Management Mutations
export const TASK_CREATE = gql`
  mutation TaskCreate($input: TaskCreateInput!) {
    officeTaskCreate(input: $input) {
      id
      title
      description
      status
      priority
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const TASK_UPDATE = gql`
  mutation TaskUpdate($input: TaskUpdateInput!) {
    officeTaskUpdate(input: $input) {
      id
      title
      description
      status
      priority
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const TASK_STATUS_UPDATE = gql`
  mutation TaskStatusUpdate($input: TaskStatusUpdateInput!) {
    officeTaskStatusUpdate(input: $input) {
      id
      title
      description
      status
      priority
      assignedTo {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

// Profile Management Mutations
export const PROFILE_ADD_BLOCK = gql`
  mutation ProfileAddBlock($input: ProfileBlockInput!) {
    profileAddBlock(input: $input) {
      id
      name
      type
      fields {
        id
        name
        type
        value
      }
      createdAt
      updatedAt
    }
  }
`;

export const PROFILE_ADD_FIELD = gql`
  mutation ProfileAddField($input: ProfileFieldInput!) {
    profileAddField(input: $input) {
      id
      name
      type
      value
      createdAt
      updatedAt
    }
  }
`;

export const PROFILE_EDIT_BLOCK = gql`
  mutation ProfileEditBlock($input: ProfileBlockInput!) {
    profileEditBlock(input: $input) {
      id
      name
      type
      fields {
        id
        name
        type
        value
      }
      createdAt
      updatedAt
    }
  }
`;

export const PROFILE_EDIT_FIELD = gql`
  mutation ProfileEditField($input: ProfileFieldInput!) {
    profileEditField(input: $input) {
      id
      name
      type
      value
      createdAt
      updatedAt
    }
  }
`;

// Storage & File Management Mutations
export const STORAGE_UPLOAD_FILE = gql`
  mutation StorageUploadFile($file: Upload!) {
    storageUploadFile(file: $file) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

export const STORAGE_DELETE_FILE = gql`
  mutation StorageDeleteFile($id: String!) {
    storageDeleteFile(id: $id) {
      id
      name
      url
      type
      size
      createdAt
      updatedAt
    }
  }
`;

// Other Mutations
export const USER_CHECK_IN = gql`
  mutation UserCheckIn($input: CheckInInput!) {
    userCheckIn(input: $input) {
      id
      userId
      placeId
      type
      status
      createdAt
      updatedAt
    }
  }
`;

export const WHITELIST_ADD_IP = gql`
  mutation WhitelistAddIP($input: WhitelistAddIPInput!) {
    whitelistAddIP(input: $input) {
      success
      message
    }
  }
`;

export const WHITELIST_REMOVE_IP = gql`
  mutation WhitelistRemoveIP($id: String!) {
    whitelistRemoveIP(id: $id) {
      success
      message
    }
  }
`;
