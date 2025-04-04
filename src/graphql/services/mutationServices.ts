import { ApolloClient, MutationOptions } from "@apollo/client";
import { Mutation } from "../generated/graphql";
import {
  // App & Notification Mutations
  APP_NOTIFICATION_GET_DETAIL,
  APP_NOTIFICATION_REMOVE,
  APP_NOTIFICATION_UPDATE,
  APP_NOTIFICATION_UPDATE_ALL,
  // Chat Mutations
  CHAT_CONVERSATION_DELETE,
  CHAT_CONVERSATION_LEAVE,
  CHAT_GROUP_ADD,
  CHAT_GROUP_EDIT,
  CHAT_MESSAGE_ADD,
  CHAT_MESSAGE_DELETE_HISTORY,
  CHAT_MESSAGE_EDIT,
  CHAT_MESSAGE_UPDATE_REACTION,
  CHAT_MESSAGE_UPDATE_READ,
  // Check-in Mutations
  CHECK_IN_ADD_PLACE,
  CHECK_IN_BEACON,
  CHECK_IN_EDIT_BEACON,
  CHECK_IN_EDIT_PLACE,
  CHECK_IN_REMOVE_BEACON,
  CHECK_IN_REMOVE_PLACE,
  CHECK_IN_SYNC_BEACON,
  // Document Mutations
  DOCUMENT_ADD_FOLDER,
  DOCUMENT_COPY_FILE,
  DOCUMENT_DELETE_FILE,
  DOCUMENT_DELETE_FOLDER,
  DOCUMENT_EDIT_FOLDER,
  DOCUMENT_GEN_LINK_UPLOAD,
  DOCUMENT_MOVE_FILE,
  DOCUMENT_RENAME_FILE,
  DOCUMENT_UPLOAD_FILE,
  DOCUMENT_UPLOAD_FILE_SUCCESS,
  // Identity & Authentication Mutations
  IDENTITY_CHANGE_PASSWORD,
  IDENTITY_LOGOUT,
  IDENTITY_OFFICE_LOGIN,
  IDENTITY_OFFICE_PHONE_CHALLENGE,
  IDENTITY_REFRESH_TOKEN,
  IDENTITY_SET_PASSWORD,
  IDENTITY_SYS_LOGIN,
  IDENTITY_VERIFY_FORGOT_PASSWORD,
  // Learning Management Mutations
  LEARNING_ADDRESS_CREATE,
  LEARNING_ADDRESS_REMOVE,
  LEARNING_ADDRESS_UPDATE,
  LEARNING_ADDRESS_UPSERT,
  LEARNING_CERTIFICATE_CREATE,
  LEARNING_CERTIFICATE_REMOVE,
  LEARNING_CERTIFICATE_UPDATE,
  LEARNING_CERTIFICATE_UPSERT,
  LEARNING_COURSE_CREATE,
  LEARNING_COURSE_REORDER_SECTION,
  LEARNING_COURSE_REMOVE,
  LEARNING_COURSE_UPDATE,
  LEARNING_COURSE_UPSERT,
  // Wiki Management Mutations
  WIKI_CATEGORY_CREATE,
  WIKI_CATEGORY_REMOVE,
  WIKI_CATEGORY_UPDATE,
  WIKI_CATEGORY_UPSERT,
  WIKI_CREATE,
  WIKI_UPDATE,
  WIKI_REMOVE,
  WIKI_SET_IMPORTANT,
  // Employee & Organization Management Mutations
  EMPLOYEE_ADD,
  ORG_CHART_ADD,
  EMPLOYEE_EDIT,
  ORG_CHART_EDIT,
  EMPLOYEE_BULK_CREATE,
  EMPLOYEE_BULK_UPSERT,
  // Asset Management Mutations
  ASSET_CREATE,
  ASSET_REMOVE,
  ASSET_UPDATE,
  // Payroll & Paycheck Mutations
  PAYROLL_CREATE,
  PAYROLL_UPDATE,
  PAYCHECK_CREATE,
  PAYCHECK_UPDATE,
  // Work Profile Mutations
  WORK_PROFILE_CREATE,
  WORK_PROFILE_UPDATE,
  // Approval & Form Mutations
  APPROVAL_FORM_GROUP_CREATE,
  APPROVAL_FORM_GROUP_REMOVE,
  APPROVAL_FORM_GROUP_UPDATE,
  // Car & Meeting Room Mutations
  CAR_ADD,
  CAR_BOOK,
  MEETING_ROOM_BOOK,
  MEETING_ROOM_CREATE,
  // Task Management Mutations
  TASK_CREATE,
  TASK_UPDATE,
  TASK_STATUS_UPDATE,
  // Profile Management Mutations
  PROFILE_ADD_BLOCK,
  PROFILE_ADD_FIELD,
  PROFILE_EDIT_BLOCK,
  PROFILE_EDIT_FIELD,
  // Storage & File Management Mutations
  STORAGE_UPLOAD_FILE,
  STORAGE_DELETE_FILE,
  // Other Mutations
  USER_CHECK_IN,
  WHITELIST_ADD_IP,
  WHITELIST_REMOVE_IP,
} from "./mutations";

export class MutationServices {
  constructor(private client: ApolloClient<any>) {}

  // App & Notification Mutations
  async appNotificationGetDetail(
    id: string
  ): Promise<Mutation["appNotificationGetDetail"]> {
    const { data } = await this.client.mutate({
      mutation: APP_NOTIFICATION_GET_DETAIL,
      variables: { id },
    });
    return data.appNotificationGetDetail;
  }

  async appNotificationRemove(
    id: string
  ): Promise<Mutation["appNotificationRemove"]> {
    const { data } = await this.client.mutate({
      mutation: APP_NOTIFICATION_REMOVE,
      variables: { id },
    });
    return data.appNotificationRemove;
  }

  async appNotificationUpdate(
    args: any
  ): Promise<Mutation["appNotificationUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: APP_NOTIFICATION_UPDATE,
      variables: { arguments: args },
    });
    return data.appNotificationUpdate;
  }

  async appNotificationUpdateAll(
    args: any
  ): Promise<Mutation["appNotificationUpdateAll"]> {
    const { data } = await this.client.mutate({
      mutation: APP_NOTIFICATION_UPDATE_ALL,
      variables: { arguments: args },
    });
    return data.appNotificationUpdateAll;
  }

  // Chat Mutations
  async chatConversationDelete(
    id: string
  ): Promise<Mutation["chatConversationDelete"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_CONVERSATION_DELETE,
      variables: { id },
    });
    return data.chatConversationDelete;
  }

  async chatConversationLeave(
    id: string
  ): Promise<Mutation["chatConversationLeave"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_CONVERSATION_LEAVE,
      variables: { id },
    });
    return data.chatConversationLeave;
  }

  async chatGroupAdd(input: any): Promise<Mutation["chatGroupAdd"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_GROUP_ADD,
      variables: { input },
    });
    return data.chatGroupAdd;
  }

  async chatGroupEdit(input: any): Promise<Mutation["chatGroupEdit"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_GROUP_EDIT,
      variables: { input },
    });
    return data.chatGroupEdit;
  }

  async chatMessageAdd(input: any): Promise<Mutation["chatMessageAdd"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_MESSAGE_ADD,
      variables: { input },
    });
    return data.chatMessageAdd;
  }

  async chatMessageDeleteHistory(
    id: string
  ): Promise<Mutation["chatMessageDeleteHistory"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_MESSAGE_DELETE_HISTORY,
      variables: { id },
    });
    return data.chatMessageDeleteHistory;
  }

  async chatMessageEdit(input: any): Promise<Mutation["chatMessageEdit"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_MESSAGE_EDIT,
      variables: { input },
    });
    return data.chatMessageEdit;
  }

  async chatMessageUpdateReaction(
    input: any
  ): Promise<Mutation["chatMessageUpdateReaction"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_MESSAGE_UPDATE_REACTION,
      variables: { input },
    });
    return data.chatMessageUpdateReaction;
  }

  async chatMessageUpdateRead(
    input: any
  ): Promise<Mutation["chatMessageUpdateRead"]> {
    const { data } = await this.client.mutate({
      mutation: CHAT_MESSAGE_UPDATE_READ,
      variables: { input },
    });
    return data.chatMessageUpdateRead;
  }

  // Check-in Mutations
  async checkInAddPlace(input: any): Promise<Mutation["checkInAddPlace"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_ADD_PLACE,
      variables: { input },
    });
    return data.checkInAddPlace;
  }

  async checkInBeacon(input: any): Promise<Mutation["checkInBeacon"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_BEACON,
      variables: { input },
    });
    return data.checkInBeacon;
  }

  async checkInEditBeacon(input: any): Promise<Mutation["checkInEditBeacon"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_EDIT_BEACON,
      variables: { input },
    });
    return data.checkInEditBeacon;
  }

  async checkInEditPlace(input: any): Promise<Mutation["checkInEditPlace"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_EDIT_PLACE,
      variables: { input },
    });
    return data.checkInEditPlace;
  }

  async checkInRemoveBeacon(
    id: string
  ): Promise<Mutation["checkInRemoveBeacon"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_REMOVE_BEACON,
      variables: { id },
    });
    return data.checkInRemoveBeacon;
  }

  async checkInRemovePlace(
    id: string
  ): Promise<Mutation["checkInRemovePlace"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_REMOVE_PLACE,
      variables: { id },
    });
    return data.checkInRemovePlace;
  }

  async checkInSyncBeacon(
    input: any[]
  ): Promise<Mutation["checkInSyncBeacon"]> {
    const { data } = await this.client.mutate({
      mutation: CHECK_IN_SYNC_BEACON,
      variables: { input },
    });
    return data.checkInSyncBeacon;
  }

  // Document Mutations
  async documentAddFolder(args: any): Promise<Mutation["documentAddFolder"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_ADD_FOLDER,
      variables: { arguments: args },
    });
    return data.documentAddFolder;
  }

  async documentCopyFile(
    fileId: string,
    folderId?: string,
    override?: boolean
  ): Promise<Mutation["documentCopyFile"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_COPY_FILE,
      variables: { fileId, folderId, override },
    });
    return data.documentCopyFile;
  }

  async documentDeleteFile(
    fileId: string
  ): Promise<Mutation["documentDeleteFile"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_DELETE_FILE,
      variables: { fileId },
    });
    return data.documentDeleteFile;
  }

  async documentDeleteFolder(
    folderId: string
  ): Promise<Mutation["documentDeleteFolder"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_DELETE_FOLDER,
      variables: { folderId },
    });
    return data.documentDeleteFolder;
  }

  async documentEditFolder(args: any): Promise<Mutation["documentEditFolder"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_EDIT_FOLDER,
      variables: { arguments: args },
    });
    return data.documentEditFolder;
  }

  async documentGenLinkUpload(
    filename: string,
    folderId?: string,
    mimetype?: string,
    override?: boolean
  ): Promise<Mutation["documentGenLinkUpload"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_GEN_LINK_UPLOAD,
      variables: { filename, folderId, mimetype, override },
    });
    return data.documentGenLinkUpload;
  }

  async documentMoveFile(
    fileId: string,
    folderId?: string,
    override?: boolean
  ): Promise<Mutation["documentMoveFile"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_MOVE_FILE,
      variables: { fileId, folderId, override },
    });
    return data.documentMoveFile;
  }

  async documentRenameFile(
    fileId: string,
    name: string,
    override?: boolean
  ): Promise<Mutation["documentRenameFile"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_RENAME_FILE,
      variables: { fileId, name, override },
    });
    return data.documentRenameFile;
  }

  async documentUploadFile(
    file: any,
    folderId?: string,
    override?: boolean
  ): Promise<Mutation["documentUploadFile"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_UPLOAD_FILE,
      variables: { file, folderId, override },
    });
    return data.documentUploadFile;
  }

  async documentUploadFileSuccess(
    encoding: string,
    filename: string,
    folderId?: string,
    mimetype?: string,
    path?: string
  ): Promise<Mutation["documentUploadFileSuccess"]> {
    const { data } = await this.client.mutate({
      mutation: DOCUMENT_UPLOAD_FILE_SUCCESS,
      variables: { encoding, filename, folderId, mimetype, path },
    });
    return data.documentUploadFileSuccess;
  }

  // Identity & Authentication Mutations
  async identityChangePassword(
    input: any
  ): Promise<Mutation["identityChangePassword"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_CHANGE_PASSWORD,
      variables: { input },
    });
    return data.identityChangePassword;
  }

  async identityLogout(): Promise<Mutation["identityLogout"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_LOGOUT,
    });
    return data.identityLogout;
  }

  async identityOfficeLogin(
    input: any
  ): Promise<Mutation["identityOfficeLogin"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_OFFICE_LOGIN,
      variables: { input },
    });
    return data.identityOfficeLogin;
  }

  async identityOfficePhoneChallenge(
    input: any
  ): Promise<Mutation["identityOfficePhoneChallenge"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_OFFICE_PHONE_CHALLENGE,
      variables: { input },
    });
    return data.identityOfficePhoneChallenge;
  }

  async identityRefreshToken(): Promise<Mutation["identityRefreshToken"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_REFRESH_TOKEN,
    });
    return data.identityRefreshToken;
  }

  async identitySetPassword(
    input: any
  ): Promise<Mutation["identitySetPassword"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_SET_PASSWORD,
      variables: { input },
    });
    return data.identitySetPassword;
  }

  async identitySysLogin(input: any): Promise<Mutation["identitySysLogin"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_SYS_LOGIN,
      variables: { input },
    });
    return data.identitySysLogin;
  }

  async identityVerifyForgotPassword(
    input: any
  ): Promise<Mutation["identityVerifyForgotPassword"]> {
    const { data } = await this.client.mutate({
      mutation: IDENTITY_VERIFY_FORGOT_PASSWORD,
      variables: { input },
    });
    return data.identityVerifyForgotPassword;
  }

  // Learning Management Mutations
  async learningAddressCreate(
    input: any
  ): Promise<Mutation["manageLearningAddressCreate"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_ADDRESS_CREATE,
      variables: { input },
    });
    return data.manageLearningAddressCreate;
  }

  async learningAddressRemove(
    id: string
  ): Promise<Mutation["manageLearningAddressRemove"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_ADDRESS_REMOVE,
      variables: { id },
    });
    return data.manageLearningAddressRemove;
  }

  async learningAddressUpdate(
    input: any
  ): Promise<Mutation["manageLearningAddressUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_ADDRESS_UPDATE,
      variables: { input },
    });
    return data.manageLearningAddressUpdate;
  }

  async learningAddressUpsert(
    input: any
  ): Promise<Mutation["manageLearningAddressUpsert"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_ADDRESS_UPSERT,
      variables: { input },
    });
    return data.manageLearningAddressUpsert;
  }

  async learningCertificateCreate(
    input: any
  ): Promise<Mutation["manageLearningCertificateCreate"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_CERTIFICATE_CREATE,
      variables: { input },
    });
    return data.manageLearningCertificateCreate;
  }

  async learningCertificateRemove(
    id: string
  ): Promise<Mutation["manageLearningCertificateRemove"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_CERTIFICATE_REMOVE,
      variables: { id },
    });
    return data.manageLearningCertificateRemove;
  }

  async learningCertificateUpdate(
    input: any
  ): Promise<Mutation["manageLearningCertificateUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_CERTIFICATE_UPDATE,
      variables: { input },
    });
    return data.manageLearningCertificateUpdate;
  }

  async learningCertificateUpsert(
    input: any
  ): Promise<Mutation["manageLearningCertificateUpsert"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_CERTIFICATE_UPSERT,
      variables: { input },
    });
    return data.manageLearningCertificateUpsert;
  }

  async learningCourseCreate(
    input: any
  ): Promise<Mutation["manageLearningCourseCreate"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_COURSE_CREATE,
      variables: { input },
    });
    return data.manageLearningCourseCreate;
  }

  async learningCourseReOrderSection(
    input: any
  ): Promise<Mutation["manageLearningCourseReOrderSection"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_COURSE_REORDER_SECTION,
      variables: { input },
    });
    return data.manageLearningCourseReOrderSection;
  }

  async learningCourseRemove(
    id: string
  ): Promise<Mutation["manageLearningCourseRemove"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_COURSE_REMOVE,
      variables: { id },
    });
    return data.manageLearningCourseRemove;
  }

  async learningCourseUpdate(
    input: any
  ): Promise<Mutation["manageLearningCourseUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_COURSE_UPDATE,
      variables: { input },
    });
    return data.manageLearningCourseUpdate;
  }

  async learningCourseUpsert(
    input: any
  ): Promise<Mutation["manageLearningCourseUpsert"]> {
    const { data } = await this.client.mutate({
      mutation: LEARNING_COURSE_UPSERT,
      variables: { input },
    });
    return data.manageLearningCourseUpsert;
  }

  // Wiki Management Mutations
  async wikiCategoryCreate(
    input: any
  ): Promise<Mutation["manageWikiCategoryCreate"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_CATEGORY_CREATE,
      variables: { input },
    });
    return data.manageWikiCategoryCreate;
  }

  async wikiCategoryRemove(
    id: string
  ): Promise<Mutation["manageWikiCategoryRemove"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_CATEGORY_REMOVE,
      variables: { id },
    });
    return data.manageWikiCategoryRemove;
  }

  async wikiCategoryUpdate(
    input: any
  ): Promise<Mutation["manageWikiCategoryUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_CATEGORY_UPDATE,
      variables: { input },
    });
    return data.manageWikiCategoryUpdate;
  }

  async wikiCategoryUpsert(
    input: any
  ): Promise<Mutation["manageWikiCategoryUpsert"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_CATEGORY_UPSERT,
      variables: { input },
    });
    return data.manageWikiCategoryUpsert;
  }

  async wikiCreate(input: any): Promise<Mutation["manageWikiCreate"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_CREATE,
      variables: { input },
    });
    return data.manageWikiCreate;
  }

  async wikiUpdate(input: any): Promise<Mutation["manageWikiUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_UPDATE,
      variables: { input },
    });
    return data.manageWikiUpdate;
  }

  async wikiRemove(id: string): Promise<Mutation["manageWikiRemove"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_REMOVE,
      variables: { id },
    });
    return data.manageWikiRemove;
  }

  async wikiSetImportant(
    id: string
  ): Promise<Mutation["manageWikiSetImportant"]> {
    const { data } = await this.client.mutate({
      mutation: WIKI_SET_IMPORTANT,
      variables: { id },
    });
    return data.manageWikiSetImportant;
  }

  // Employee & Organization Management Mutations
  async employeeAdd(input: any): Promise<Mutation["managementAddEmployee"]> {
    const { data } = await this.client.mutate({
      mutation: EMPLOYEE_ADD,
      variables: { input },
    });
    return data.managementAddEmployee;
  }

  async orgChartAdd(input: any): Promise<Mutation["managementAddOrgChart"]> {
    const { data } = await this.client.mutate({
      mutation: ORG_CHART_ADD,
      variables: { input },
    });
    return data.managementAddOrgChart;
  }

  async employeeEdit(input: any): Promise<Mutation["managementEditEmployee"]> {
    const { data } = await this.client.mutate({
      mutation: EMPLOYEE_EDIT,
      variables: { input },
    });
    return data.managementEditEmployee;
  }

  async orgChartEdit(input: any): Promise<Mutation["managementEditOrgChart"]> {
    const { data } = await this.client.mutate({
      mutation: ORG_CHART_EDIT,
      variables: { input },
    });
    return data.managementEditOrgChart;
  }

  async employeeBulkCreate(
    input: any
  ): Promise<Mutation["managementEmployeeBulkCreate"]> {
    const { data } = await this.client.mutate({
      mutation: EMPLOYEE_BULK_CREATE,
      variables: { input },
    });
    return data.managementEmployeeBulkCreate;
  }

  async employeeBulkUpsert(
    input: any
  ): Promise<Mutation["managementEmployeeBulkUpsert"]> {
    const { data } = await this.client.mutate({
      mutation: EMPLOYEE_BULK_UPSERT,
      variables: { input },
    });
    return data.managementEmployeeBulkUpsert;
  }

  // Asset Management Mutations
  async assetCreate(input: any): Promise<Mutation["managerAssetCreate"]> {
    const { data } = await this.client.mutate({
      mutation: ASSET_CREATE,
      variables: { input },
    });
    return data.managerAssetCreate;
  }

  async assetRemove(id: string): Promise<Mutation["managerAssetRemove"]> {
    const { data } = await this.client.mutate({
      mutation: ASSET_REMOVE,
      variables: { id },
    });
    return data.managerAssetRemove;
  }

  async assetUpdate(input: any): Promise<Mutation["managerAssetUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: ASSET_UPDATE,
      variables: { input },
    });
    return data.managerAssetUpdate;
  }

  // Payroll & Paycheck Mutations
  async payrollCreate(
    input: any
  ): Promise<Mutation["managementPayrollCreate"]> {
    const { data } = await this.client.mutate({
      mutation: PAYROLL_CREATE,
      variables: { input },
    });
    return data.managementPayrollCreate;
  }

  async payrollUpdate(
    input: any
  ): Promise<Mutation["managementPayrollUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: PAYROLL_UPDATE,
      variables: { input },
    });
    return data.managementPayrollUpdate;
  }

  async paycheckCreate(
    input: any
  ): Promise<Mutation["managementUserPaycheckCreate"]> {
    const { data } = await this.client.mutate({
      mutation: PAYCHECK_CREATE,
      variables: { input },
    });
    return data.managementUserPaycheckCreate;
  }

  async paycheckUpdate(
    input: any
  ): Promise<Mutation["managementUserPaycheckUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: PAYCHECK_UPDATE,
      variables: { input },
    });
    return data.managementUserPaycheckUpdate;
  }

  // Work Profile Mutations
  async workProfileCreate(
    input: any
  ): Promise<Mutation["managementWorkProfileCreate"]> {
    const { data } = await this.client.mutate({
      mutation: WORK_PROFILE_CREATE,
      variables: { input },
    });
    return data.managementWorkProfileCreate;
  }

  async workProfileUpdate(
    input: any
  ): Promise<Mutation["managementWorkProfileUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: WORK_PROFILE_UPDATE,
      variables: { input },
    });
    return data.managementWorkProfileUpdate;
  }

  // Approval & Form Mutations
  async approvalFormGroupCreate(
    input: any
  ): Promise<Mutation["managerApprovalFormGroupCreate"]> {
    const { data } = await this.client.mutate({
      mutation: APPROVAL_FORM_GROUP_CREATE,
      variables: { input },
    });
    return data.managerApprovalFormGroupCreate;
  }

  async approvalFormGroupRemove(
    id: string
  ): Promise<Mutation["managerApprovalFormGroupRemove"]> {
    const { data } = await this.client.mutate({
      mutation: APPROVAL_FORM_GROUP_REMOVE,
      variables: { id },
    });
    return data.managerApprovalFormGroupRemove;
  }

  async approvalFormGroupUpdate(
    input: any
  ): Promise<Mutation["managerApprovalFormGroupUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: APPROVAL_FORM_GROUP_UPDATE,
      variables: { input },
    });
    return data.managerApprovalFormGroupUpdate;
  }

  // Car & Meeting Room Mutations
  async carAdd(input: any): Promise<Mutation["officeAddCar"]> {
    const { data } = await this.client.mutate({
      mutation: CAR_ADD,
      variables: { input },
    });
    return data.officeAddCar;
  }

  async carBook(input: any): Promise<Mutation["officeBookCar"]> {
    const { data } = await this.client.mutate({
      mutation: CAR_BOOK,
      variables: { input },
    });
    return data.officeBookCar;
  }

  async meetingRoomBook(
    input: any
  ): Promise<Mutation["officeBookMeetingRoom"]> {
    const { data } = await this.client.mutate({
      mutation: MEETING_ROOM_BOOK,
      variables: { input },
    });
    return data.officeBookMeetingRoom;
  }

  async meetingRoomCreate(
    input: any
  ): Promise<Mutation["officeCreateMeetingRoom"]> {
    const { data } = await this.client.mutate({
      mutation: MEETING_ROOM_CREATE,
      variables: { input },
    });
    return data.officeCreateMeetingRoom;
  }

  // Task Management Mutations
  async taskCreate(input: any): Promise<Mutation["officeTaskCreate"]> {
    const { data } = await this.client.mutate({
      mutation: TASK_CREATE,
      variables: { input },
    });
    return data.officeTaskCreate;
  }

  async taskUpdate(input: any): Promise<Mutation["officeTaskUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: TASK_UPDATE,
      variables: { input },
    });
    return data.officeTaskUpdate;
  }

  async taskStatusUpdate(
    input: any
  ): Promise<Mutation["officeTaskStatusUpdate"]> {
    const { data } = await this.client.mutate({
      mutation: TASK_STATUS_UPDATE,
      variables: { input },
    });
    return data.officeTaskStatusUpdate;
  }

  // Profile Management Mutations
  async profileAddBlock(input: any): Promise<Mutation["profileAddBlock"]> {
    const { data } = await this.client.mutate({
      mutation: PROFILE_ADD_BLOCK,
      variables: { input },
    });
    return data.profileAddBlock;
  }

  async profileAddField(input: any): Promise<Mutation["profileAddField"]> {
    const { data } = await this.client.mutate({
      mutation: PROFILE_ADD_FIELD,
      variables: { input },
    });
    return data.profileAddField;
  }

  async profileEditBlock(input: any): Promise<Mutation["profileEditBlock"]> {
    const { data } = await this.client.mutate({
      mutation: PROFILE_EDIT_BLOCK,
      variables: { input },
    });
    return data.profileEditBlock;
  }

  async profileEditField(input: any): Promise<Mutation["profileEditField"]> {
    const { data } = await this.client.mutate({
      mutation: PROFILE_EDIT_FIELD,
      variables: { input },
    });
    return data.profileEditField;
  }

  // Storage & File Management Mutations
  async storageUploadFile(file: any): Promise<Mutation["storageUploadFile"]> {
    const { data } = await this.client.mutate({
      mutation: STORAGE_UPLOAD_FILE,
      variables: { file },
    });
    return data.storageUploadFile;
  }

  async storageDeleteFile(id: string): Promise<Mutation["storageDeleteFile"]> {
    const { data } = await this.client.mutate({
      mutation: STORAGE_DELETE_FILE,
      variables: { id },
    });
    return data.storageDeleteFile;
  }

  // Other Mutations
  async userCheckIn(input: any): Promise<Mutation["userCheckIn"]> {
    const { data } = await this.client.mutate({
      mutation: USER_CHECK_IN,
      variables: { input },
    });
    return data.userCheckIn;
  }

  async whitelistAddIP(input: any): Promise<Mutation["whitelistAddIP"]> {
    const { data } = await this.client.mutate({
      mutation: WHITELIST_ADD_IP,
      variables: { input },
    });
    return data.whitelistAddIP;
  }

  async whitelistRemoveIP(id: string): Promise<Mutation["whitelistRemoveIP"]> {
    const { data } = await this.client.mutate({
      mutation: WHITELIST_REMOVE_IP,
      variables: { id },
    });
    return data.whitelistRemoveIP;
  }
}
