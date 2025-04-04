import { ApolloClient } from '@apollo/client';
import { Query } from '../generated/graphql';
import {
  // Address Queries
  ADDRESS_GET_COUNTRIES,
  ADDRESS_GET_DISTRICTS,
  ADDRESS_GET_LOCATION_BY_TEXT,
  ADDRESS_GET_PROVINCES,
  ADDRESS_GET_WARDS,
  ADDRESS_GET_ZONE_BY_LOCATION,
  ADDRESS_ZONE_GET_LIST,
  
  // Organization & Admin Queries
  ADMIN_ORG_CHART_LIST,
  ORGANIZATION_GET_BY_CODE,
  ORGANIZATION_GET_BY_PHONE,
  ORGANIZATION_GET_GROUP,
  ORGANIZATION_GET_LIST,
  GET_LIST_ORGANIZATION_DEVICES,
  GET_LIST_ORGANIZATION_DEVICES_APPROVED,
  
  // App & Notification Queries
  APP_NOTIFICATION_GET_LIST,
  NOTIFICATION_GET_LIST,
  OFFICE_GET_NOTIFICATION_CAMPAIGN_LIST,
  
  // Chat Queries
  CHAT_CONVERSATION_DETAIL,
  CHAT_CONVERSATION_LIST,
  CHAT_MESSAGE_LIST,
  CHAT_SEARCH,
  OFFICE_CHAT_LINK_PREVIEW,
  OFFICE_CHAT_MESSAGE_SEARCH,
  
  // Check-in Queries
  CHECK_IN_GET_BEACON_LIST,
  CHECK_IN_GET_DETAIL,
  CHECK_IN_GET_HISTORIES,
  CHECK_IN_GET_PLACE,
  CHECK_IN_GET_PLACE_LIST,
  CHECK_IN_GET_UP_TIME,
  CHECK_IN_GET_UP_TIME_BY_PLACE,
  
  // Document Queries
  DOCUMENT_FOLDER_ELEMENTS,
  DOCUMENT_FOLDER_TREE,
  DOCUMENT_GET_FILE,
  DOCUMENT_GET_FOLDER,
  DOCUMENT_SEARCH_ELEMENTS,
  OFFICE_DOCUMENT_TAG_LIST,
  
  // Identity & Profile Queries
  IDENTITY_PROFILE,
  IDENTITY_BANK_GET_LIST,
  IDENTITY_CARRIER_GET_LIST,
  IDENTIFY_CARD_PLACE_LIST,
  PROFILE_GET_BLOCKS,
  PROFILE_GET_FIELDS,
  
  // Learning Management Queries
  MANAGE_LEARNING_ADDRESS_GET,
  MANAGE_LEARNING_ADDRESS_LIST,
  MANAGE_LEARNING_CERTIFICATE_GET,
  MANAGE_LEARNING_CERTIFICATE_LIST,
  MANAGE_LEARNING_COURSE_GET,
  MANAGE_LEARNING_COURSE_LIST,
  MANAGE_LEARNING_LESSON_GET,
  MANAGE_LEARNING_LESSON_LIST,
  MANAGE_LEARNING_PROJECT_GET,
  MANAGE_LEARNING_PROJECT_LIST,
  MANAGE_LEARNING_SECTION_GET,
  MANAGE_LEARNING_SECTION_LIST,
  MANAGE_LEARNING_SKILL_GET,
  MANAGE_LEARNING_SKILL_LIST,
  
  // Office Learning Management Queries
  OFFICE_LEARNING_CERTIFICATE_GET,
  OFFICE_LEARNING_CERTIFICATE_LIST,
  OFFICE_LEARNING_COURSE_GET,
  OFFICE_LEARNING_COURSE_LIST,
  OFFICE_LEARNING_LESSON_GET,
  OFFICE_LEARNING_LESSON_LIST,
  OFFICE_LEARNING_PROJECT_GET,
  OFFICE_LEARNING_PROJECT_LIST,
  OFFICE_LEARNING_SECTION_GET,
  OFFICE_LEARNING_SECTION_LIST,
  OFFICE_LEARNING_SKILL_GET,
  OFFICE_LEARNING_SKILL_LIST,
  
  // Wiki Management Queries
  MANAGE_WIKI_CATEGORY_GET,
  MANAGE_WIKI_CATEGORY_LIST,
  MANAGE_WIKI_GET,
  MANAGE_WIKI_LIST,
  OFFICE_WIKI_CATEGORY_LIST,
  OFFICE_WIKI_GET,
  OFFICE_WIKI_LATEST_LIST,
  OFFICE_WIKI_LIST,
  
  // Asset Management Queries
  MANAGEMENT_ASSET_GET,
  MANAGEMENT_ASSET_LIST,
  MANAGEMENT_CATEGORY_ASSET_LIST,
  MANAGEMENT_WAREHOUSE_ASSET_LIST,
  
  // Employee & User Management Queries
  MANAGEMENT_GET_EMPLOYEE,
  MANAGEMENT_GET_EMPLOYEE_LIST,
  MANAGEMENT_GET_EMPLOYEE_SCHEDULE,
  MANAGEMENT_LIST_EMPLOYEE_OF_ORG_CHART,
  OFFICE_EMPLOYEE_FULL_ORG_CHART_LIST,
  OFFICE_LIST_EMPLOYEE_OF_ORG_CHART,
  OFFICE_SYS_USER_GET_LIST,
  
  // Work Profile Queries
  MANAGEMENT_WORK_PROFILE_GET,
  MANAGEMENT_WORK_PROFILE_GET_SOFT_FIELDS,
  MANAGEMENT_WORK_PROFILE_INFO_TYPE_GET_LIST,
  MANAGEMENT_WORK_PROFILE_LIST,
  OFFICE_WORK_PROFILE_LIST,
  
  // Payroll & Paycheck Queries
  MANAGEMENT_PAYROLL_GET,
  MANAGEMENT_PAYROLL_LIST,
  MANAGEMENT_USER_PAYCHECK_GET,
  MANAGEMENT_USER_PAYCHECK_LIST,
  OFFICE_USER_PAYCHECK_GET,
  OFFICE_USER_PAYCHECK_LIST,
  
  // Approval & Form Queries
  APPROVAL_GET,
  MANAGER_APPROVAL_FORM_GROUP_GET,
  MANAGER_APPROVAL_FORM_GROUP_LIST,
  OFFICE_APPROVAL_FILTER_GET,
  OFFICE_APPROVAL_FILTER_LIST,
  OFFICE_APPROVAL_FORM_GET_LIST,
  OFFICE_APPROVAL_FORM_GROUP_LIST,
  OFFICE_APPROVAL_GET_FORM,
  OFFICE_APPROVAL_MENU_COUNT,
  
  // Car & Meeting Room Queries
  OFFICE_CAR_BOOKING_GET_SCHEDULE,
  OFFICE_CAR_BOOKING_GET_SCHEDULE_LIST,
  OFFICE_GET_ACTIVE_CARS,
  OFFICE_GET_BOOKING_CAR_SCHEDULE,
  OFFICE_GET_CARS,
  OFFICE_GET_MEETING_DETAIL,
  OFFICE_GET_MEETING_SCHEDULE,
  OFFICE_MEETING_ROOM_GET_LIST,
  
  // Task Management Queries
  OFFICE_TASK_FILTER_GET,
  OFFICE_TASK_FILTER_LIST,
  OFFICE_TASK_GET,
  OFFICE_TASK_LIST,
  OFFICE_TASK_REPORT_CONFIG_LIST,
  
  // Permission & Role Queries
  IAM_ACCESS_GET_PERMISSION,
  OFFICE_PERMISSION_ACTION_GET_LIST,
  OFFICE_PERMISSION_BUSINESS_ROLE_GET_LIST,
  
  // Other Queries
  ANALYSIS_NUMBER_OF_USER_USED_APP,
  APP_BUSINESS_ROLE_AVAILABLE_LIST,
  MANAGE_ADMIN_INFO_GET,
  OFFICE_FETCH_CALL_TOKEN,
  OFFICE_FETCH_RTM_TOKEN,
  OFFICE_GET_TITLES,
  STEAM_GET_LIST_SALE,
  WHITELIST_GET_IPS,
} from './queries';

export class QueryServices {
  constructor(private client: ApolloClient<any>) {}

  // Address Services
  async getCountries(filter?: any, keyword?: string): Promise<Query['addressGetCountries']> {
    const { data } = await this.client.query({
      query: ADDRESS_GET_COUNTRIES,
      variables: { filter, keyword },
    });
    return data.addressGetCountries;
  }

  async getDistricts(filter?: any, keyword?: string, provinceId?: string): Promise<Query['addressGetDistricts']> {
    const { data } = await this.client.query({
      query: ADDRESS_GET_DISTRICTS,
      variables: { filter, keyword, provinceId },
    });
    return data.addressGetDistricts;
  }

  async getLocationByText(params: any): Promise<Query['addressGetLocationByText']> {
    const { data } = await this.client.query({
      query: ADDRESS_GET_LOCATION_BY_TEXT,
      variables: { params },
    });
    return data.addressGetLocationByText;
  }

  async getProvinces(countryId?: string, filter?: any, keyword?: string): Promise<Query['addressGetProvinces']> {
    const { data } = await this.client.query({
      query: ADDRESS_GET_PROVINCES,
      variables: { countryId, filter, keyword },
    });
    return data.addressGetProvinces;
  }

  async getWards(districtId: string, filter?: any, keyword?: string): Promise<Query['addressGetWards']> {
    const { data } = await this.client.query({
      query: ADDRESS_GET_WARDS,
      variables: { districtId, filter, keyword },
    });
    return data.addressGetWards;
  }

  async getZoneByLocation(params: any): Promise<Query['addressGetZoneByLocation']> {
    const { data } = await this.client.query({
      query: ADDRESS_GET_ZONE_BY_LOCATION,
      variables: { params },
    });
    return data.addressGetZoneByLocation;
  }

  async getZoneList(filter?: any): Promise<Query['addressZoneGetList']> {
    const { data } = await this.client.query({
      query: ADDRESS_ZONE_GET_LIST,
      variables: { filter },
    });
    return data.addressZoneGetList;
  }

  // Organization & Admin Services
  async getOrgChartList(filter?: any): Promise<Query['adminOrgChartList']> {
    const { data } = await this.client.query({
      query: ADMIN_ORG_CHART_LIST,
      variables: { filter },
    });
    return data.adminOrgChartList;
  }

  async getOrganizationByCode(code: string): Promise<Query['organizationGetByCode']> {
    const { data } = await this.client.query({
      query: ORGANIZATION_GET_BY_CODE,
      variables: { code },
    });
    return data.organizationGetByCode;
  }

  async getOrganizationByPhone(phone: string): Promise<Query['organizationGetByPhone']> {
    const { data } = await this.client.query({
      query: ORGANIZATION_GET_BY_PHONE,
      variables: { phone },
    });
    return data.organizationGetByPhone;
  }

  async getOrganizationGroup(): Promise<Query['organizationGetGroup']> {
    const { data } = await this.client.query({
      query: ORGANIZATION_GET_GROUP,
    });
    return data.organizationGetGroup;
  }

  async getOrganizationList(filter?: any): Promise<Query['organizationGetList']> {
    const { data } = await this.client.query({
      query: ORGANIZATION_GET_LIST,
      variables: { filter },
    });
    return data.organizationGetList;
  }

  async getOrganizationDevices(filter?: any): Promise<Query['getListOrganizationDevices']> {
    const { data } = await this.client.query({
      query: GET_LIST_ORGANIZATION_DEVICES,
      variables: { filter },
    });
    return data.getListOrganizationDevices;
  }

  async getOrganizationDevicesApproved(): Promise<Query['getListOrganizationDevicesApproved']> {
    const { data } = await this.client.query({
      query: GET_LIST_ORGANIZATION_DEVICES_APPROVED,
    });
    return data.getListOrganizationDevicesApproved;
  }

  // App & Notification Services
  async getAppNotifications(filter?: any): Promise<Query['appNotificationGetList']> {
    const { data } = await this.client.query({
      query: APP_NOTIFICATION_GET_LIST,
      variables: { filter },
    });
    return data.appNotificationGetList;
  }

  async getNotifications(): Promise<Query['notificationGetList']> {
    const { data } = await this.client.query({
      query: NOTIFICATION_GET_LIST,
    });
    return data.notificationGetList;
  }

  async getNotificationCampaignList(): Promise<Query['officeGetNotificationCampaignList']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_NOTIFICATION_CAMPAIGN_LIST,
    });
    return data.officeGetNotificationCampaignList;
  }

  // Chat Services
  async getChatConversationDetail(conversationId?: string, receiverId?: string): Promise<Query['chatConversationDetail']> {
    const { data } = await this.client.query({
      query: CHAT_CONVERSATION_DETAIL,
      variables: { conversationId, receiverId },
    });
    return data.chatConversationDetail;
  }

  async getChatConversationList(filters?: any): Promise<Query['chatConversationList']> {
    const { data } = await this.client.query({
      query: CHAT_CONVERSATION_LIST,
      variables: { filters },
    });
    return data.chatConversationList;
  }

  async getChatMessageList(filters: any): Promise<Query['chatMessageList']> {
    const { data } = await this.client.query({
      query: CHAT_MESSAGE_LIST,
      variables: { filters },
    });
    return data.chatMessageList;
  }

  async searchChat(filters: any): Promise<Query['chatSearch']> {
    const { data } = await this.client.query({
      query: CHAT_SEARCH,
      variables: { filters },
    });
    return data.chatSearch;
  }

  async getChatLinkPreview(): Promise<Query['officeChatLinkPreview']> {
    const { data } = await this.client.query({
      query: OFFICE_CHAT_LINK_PREVIEW,
    });
    return data.officeChatLinkPreview;
  }

  async searchChatMessages(): Promise<Query['officeChatMessageSearch']> {
    const { data } = await this.client.query({
      query: OFFICE_CHAT_MESSAGE_SEARCH,
    });
    return data.officeChatMessageSearch;
  }

  // Check-in Services
  async getBeaconList(limit?: number, page?: number): Promise<Query['checkInGetBeaconList']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_BEACON_LIST,
      variables: { limit, page },
    });
    return data.checkInGetBeaconList;
  }

  async getCheckInDetail(id: string): Promise<Query['checkInGetDetail']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_DETAIL,
      variables: { id },
    });
    return data.checkInGetDetail;
  }

  async getCheckInHistories(filter?: any): Promise<Query['checkInGetHistories']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_HISTORIES,
      variables: { filter },
    });
    return data.checkInGetHistories;
  }

  async getCheckInPlace(id: string): Promise<Query['checkInGetPlace']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_PLACE,
      variables: { id },
    });
    return data.checkInGetPlace;
  }

  async getCheckInPlaceList(filter?: any): Promise<Query['checkInGetPlaceList']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_PLACE_LIST,
      variables: { filter },
    });
    return data.checkInGetPlaceList;
  }

  async getCheckInUpTime(id: string): Promise<Query['checkInGetUpTime']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_UP_TIME,
      variables: { id },
    });
    return data.checkInGetUpTime;
  }

  async getCheckInUpTimeByPlace(placeId: string): Promise<Query['checkInGetUpTimeByPlace']> {
    const { data } = await this.client.query({
      query: CHECK_IN_GET_UP_TIME_BY_PLACE,
      variables: { placeId },
    });
    return data.checkInGetUpTimeByPlace;
  }

  // Document Services
  async getDocumentFolderElements(filter?: any, folderId?: string, order?: any): Promise<Query['documentFolderElements']> {
    const { data } = await this.client.query({
      query: DOCUMENT_FOLDER_ELEMENTS,
      variables: { filter, folderId, order },
    });
    return data.documentFolderElements;
  }

  async getDocumentFolderTree(parentId?: string): Promise<Query['documentFolderTree']> {
    const { data } = await this.client.query({
      query: DOCUMENT_FOLDER_TREE,
      variables: { parentId },
    });
    return data.documentFolderTree;
  }

  async getDocumentFile(id: string): Promise<Query['documentGetFile']> {
    const { data } = await this.client.query({
      query: DOCUMENT_GET_FILE,
      variables: { id },
    });
    return data.documentGetFile;
  }

  async getDocumentFolder(id: string): Promise<Query['documentGetFolder']> {
    const { data } = await this.client.query({
      query: DOCUMENT_GET_FOLDER,
      variables: { id },
    });
    return data.documentGetFolder;
  }

  async searchDocumentElements(filter?: any, folderId?: string, order?: any): Promise<Query['documentSearchElements']> {
    const { data } = await this.client.query({
      query: DOCUMENT_SEARCH_ELEMENTS,
      variables: { filter, folderId, order },
    });
    return data.documentSearchElements;
  }

  async getDocumentTagList(): Promise<Query['officeDocumentTagList']> {
    const { data } = await this.client.query({
      query: OFFICE_DOCUMENT_TAG_LIST,
    });
    return data.officeDocumentTagList;
  }

  // Identity & Profile Services
  async getIdentityProfile(): Promise<Query['identityProfile']> {
    const { data } = await this.client.query({
      query: IDENTITY_PROFILE,
    });
    return data.identityProfile;
  }

  async getBankList(): Promise<Query['identityBankGetList']> {
    const { data } = await this.client.query({
      query: IDENTITY_BANK_GET_LIST,
    });
    return data.identityBankGetList;
  }

  async getCarrierList(): Promise<Query['identityCarrierGetList']> {
    const { data } = await this.client.query({
      query: IDENTITY_CARRIER_GET_LIST,
    });
    return data.identityCarrierGetList;
  }

  async getCardPlaceList(filter?: any): Promise<Query['identifyCardPlaceList']> {
    const { data } = await this.client.query({
      query: IDENTIFY_CARD_PLACE_LIST,
      variables: { filter },
    });
    return data.identifyCardPlaceList;
  }

  async getProfileBlocks(): Promise<Query['profileGetBlocks']> {
    const { data } = await this.client.query({
      query: PROFILE_GET_BLOCKS,
    });
    return data.profileGetBlocks;
  }

  async getProfileFields(): Promise<Query['profileGetFields']> {
    const { data } = await this.client.query({
      query: PROFILE_GET_FIELDS,
    });
    return data.profileGetFields;
  }

  // Learning Management Services
  async getLearningAddress(id: string): Promise<Query['manageLearningAddressGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_ADDRESS_GET,
      variables: { id },
    });
    return data.manageLearningAddressGet;
  }

  async getLearningAddressList(filter?: any): Promise<Query['manageLearningAddressList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_ADDRESS_LIST,
      variables: { filter },
    });
    return data.manageLearningAddressList;
  }

  async getLearningCertificate(id: string): Promise<Query['manageLearningCertificateGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_CERTIFICATE_GET,
      variables: { id },
    });
    return data.manageLearningCertificateGet;
  }

  async getLearningCertificateList(filter?: any): Promise<Query['manageLearningCertificateList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_CERTIFICATE_LIST,
      variables: { filter },
    });
    return data.manageLearningCertificateList;
  }

  async getLearningCourse(id: string): Promise<Query['manageLearningCourseGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_COURSE_GET,
      variables: { id },
    });
    return data.manageLearningCourseGet;
  }

  async getLearningCourseList(filter?: any): Promise<Query['manageLearningCourseList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_COURSE_LIST,
      variables: { filter },
    });
    return data.manageLearningCourseList;
  }

  async getLearningLesson(id: string): Promise<Query['manageLearningLessonGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_LESSON_GET,
      variables: { id },
    });
    return data.manageLearningLessonGet;
  }

  async getLearningLessonList(filter?: any): Promise<Query['manageLearningLessonList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_LESSON_LIST,
      variables: { filter },
    });
    return data.manageLearningLessonList;
  }

  async getLearningProject(id: string): Promise<Query['manageLearningProjectGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_PROJECT_GET,
      variables: { id },
    });
    return data.manageLearningProjectGet;
  }

  async getLearningProjectList(filter?: any): Promise<Query['manageLearningProjectList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_PROJECT_LIST,
      variables: { filter },
    });
    return data.manageLearningProjectList;
  }

  async getLearningSection(id: string): Promise<Query['manageLearningSectionGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_SECTION_GET,
      variables: { id },
    });
    return data.manageLearningSectionGet;
  }

  async getLearningSectionList(filter?: any): Promise<Query['manageLearningSectionList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_SECTION_LIST,
      variables: { filter },
    });
    return data.manageLearningSectionList;
  }

  async getLearningSkill(id: string): Promise<Query['manageLearningSkillGet']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_SKILL_GET,
      variables: { id },
    });
    return data.manageLearningSkillGet;
  }

  async getLearningSkillList(filter?: any): Promise<Query['manageLearningSkillList']> {
    const { data } = await this.client.query({
      query: MANAGE_LEARNING_SKILL_LIST,
      variables: { filter },
    });
    return data.manageLearningSkillList;
  }

  // Office Learning Management Services
  async getOfficeLearningCertificate(id: string): Promise<Query['officeLearningCertificateGet']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_CERTIFICATE_GET,
      variables: { id },
    });
    return data.officeLearningCertificateGet;
  }

  async getOfficeLearningCertificateList(filter?: any): Promise<Query['officeLearningCertificateList']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_CERTIFICATE_LIST,
      variables: { filter },
    });
    return data.officeLearningCertificateList;
  }

  async getOfficeLearningCourse(id: string): Promise<Query['officeLearningCourseGet']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_COURSE_GET,
      variables: { id },
    });
    return data.officeLearningCourseGet;
  }

  async getOfficeLearningCourseList(filter?: any): Promise<Query['officeLearningCourseList']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_COURSE_LIST,
      variables: { filter },
    });
    return data.officeLearningCourseList;
  }

  async getOfficeLearningLesson(id: string): Promise<Query['officeLearningLessonGet']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_LESSON_GET,
      variables: { id },
    });
    return data.officeLearningLessonGet;
  }

  async getOfficeLearningLessonList(filter?: any): Promise<Query['officeLearningLessonList']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_LESSON_LIST,
      variables: { filter },
    });
    return data.officeLearningLessonList;
  }

  async getOfficeLearningProject(id: string): Promise<Query['officeLearningProjectGet']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_PROJECT_GET,
      variables: { id },
    });
    return data.officeLearningProjectGet;
  }

  async getOfficeLearningProjectList(filter?: any): Promise<Query['officeLearningProjectList']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_PROJECT_LIST,
      variables: { filter },
    });
    return data.officeLearningProjectList;
  }

  async getOfficeLearningSection(id: string): Promise<Query['officeLearningSectionGet']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_SECTION_GET,
      variables: { id },
    });
    return data.officeLearningSectionGet;
  }

  async getOfficeLearningSectionList(filter?: any): Promise<Query['officeLearningSectionList']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_SECTION_LIST,
      variables: { filter },
    });
    return data.officeLearningSectionList;
  }

  async getOfficeLearningSkill(id: string): Promise<Query['officeLearningSkillGet']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_SKILL_GET,
      variables: { id },
    });
    return data.officeLearningSkillGet;
  }

  async getOfficeLearningSkillList(filter?: any): Promise<Query['officeLearningSkillList']> {
    const { data } = await this.client.query({
      query: OFFICE_LEARNING_SKILL_LIST,
      variables: { filter },
    });
    return data.officeLearningSkillList;
  }

  // Wiki Management Services
  async getWikiCategory(id: string): Promise<Query['manageWikiCategoryGet']> {
    const { data } = await this.client.query({
      query: MANAGE_WIKI_CATEGORY_GET,
      variables: { id },
    });
    return data.manageWikiCategoryGet;
  }

  async getWikiCategoryList(filter?: any): Promise<Query['manageWikiCategoryList']> {
    const { data } = await this.client.query({
      query: MANAGE_WIKI_CATEGORY_LIST,
      variables: { filter },
    });
    return data.manageWikiCategoryList;
  }

  async getWiki(id: string): Promise<Query['manageWikiGet']> {
    const { data } = await this.client.query({
      query: MANAGE_WIKI_GET,
      variables: { id },
    });
    return data.manageWikiGet;
  }

  async getWikiList(filter?: any): Promise<Query['manageWikiList']> {
    const { data } = await this.client.query({
      query: MANAGE_WIKI_LIST,
      variables: { filter },
    });
    return data.manageWikiList;
  }

  async getOfficeWikiCategoryList(filter?: any): Promise<Query['officeWikiCategoryList']> {
    const { data } = await this.client.query({
      query: OFFICE_WIKI_CATEGORY_LIST,
      variables: { filter },
    });
    return data.officeWikiCategoryList;
  }

  async getOfficeWiki(id: string): Promise<Query['officeWikiGet']> {
    const { data } = await this.client.query({
      query: OFFICE_WIKI_GET,
      variables: { id },
    });
    return data.officeWikiGet;
  }

  async getOfficeWikiLatestList(): Promise<Query['officeWikiLatestList']> {
    const { data } = await this.client.query({
      query: OFFICE_WIKI_LATEST_LIST,
    });
    return data.officeWikiLatestList;
  }

  async getOfficeWikiList(filter?: any): Promise<Query['officeWikiList']> {
    const { data } = await this.client.query({
      query: OFFICE_WIKI_LIST,
      variables: { filter },
    });
    return data.officeWikiList;
  }

  // Asset Management Services
  async getAsset(id: string): Promise<Query['managementAssetGet']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_ASSET_GET,
      variables: { id },
    });
    return data.managementAssetGet;
  }

  async getAssetList(filter?: any): Promise<Query['managementAssetList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_ASSET_LIST,
      variables: { filter },
    });
    return data.managementAssetList;
  }

  async getCategoryAssetList(filter?: any): Promise<Query['managementCategoryAssetList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_CATEGORY_ASSET_LIST,
      variables: { filter },
    });
    return data.managementCategoryAssetList;
  }

  async getWarehouseAssetList(filter?: any): Promise<Query['managementWarehouseAssetList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_WAREHOUSE_ASSET_LIST,
      variables: { filter },
    });
    return data.managementWarehouseAssetList;
  }

  // Employee & User Management Services
  async getEmployee(id: string): Promise<Query['managementGetEmployee']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_GET_EMPLOYEE,
      variables: { id },
    });
    return data.managementGetEmployee;
  }

  async getEmployeeList(filter?: any): Promise<Query['managementGetEmployeeList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_GET_EMPLOYEE_LIST,
      variables: { filter },
    });
    return data.managementGetEmployeeList;
  }

  async getEmployeeSchedule(id: string, startAt: number, endAt: number): Promise<Query['managementGetEmployeeSchedule']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_GET_EMPLOYEE_SCHEDULE,
      variables: { id, startAt, endAt },
    });
    return data.managementGetEmployeeSchedule;
  }

  async getEmployeeOrgChartList(): Promise<Query['managementListEmployeeOfOrgChart']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_LIST_EMPLOYEE_OF_ORG_CHART,
    });
    return data.managementListEmployeeOfOrgChart;
  }

  async getEmployeeFullOrgChartList(): Promise<Query['officeEmployeeFullOrgChartList']> {
    const { data } = await this.client.query({
      query: OFFICE_EMPLOYEE_FULL_ORG_CHART_LIST,
    });
    return data.officeEmployeeFullOrgChartList;
  }

  async getOfficeEmployeeOrgChartList(): Promise<Query['officeListEmployeeOfOrgChart']> {
    const { data } = await this.client.query({
      query: OFFICE_LIST_EMPLOYEE_OF_ORG_CHART,
    });
    return data.officeListEmployeeOfOrgChart;
  }

  async getSystemUserList(): Promise<Query['officeSysUserGetList']> {
    const { data } = await this.client.query({
      query: OFFICE_SYS_USER_GET_LIST,
    });
    return data.officeSysUserGetList;
  }

  // Work Profile Services
  async getWorkProfile(id: string): Promise<Query['managementWorkProfileGet']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_WORK_PROFILE_GET,
      variables: { id },
    });
    return data.managementWorkProfileGet;
  }

  async getWorkProfileSoftFields(): Promise<Query['managementWorkProfileGetSoftFields']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_WORK_PROFILE_GET_SOFT_FIELDS,
    });
    return data.managementWorkProfileGetSoftFields;
  }

  async getWorkProfileInfoTypeList(): Promise<Query['managementWorkProfileInfoTypeGetList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_WORK_PROFILE_INFO_TYPE_GET_LIST,
    });
    return data.managementWorkProfileInfoTypeGetList;
  }

  async getWorkProfileList(filter?: any): Promise<Query['managementWorkProfileList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_WORK_PROFILE_LIST,
      variables: { filter },
    });
    return data.managementWorkProfileList;
  }

  async getOfficeWorkProfileList(filter?: any): Promise<Query['officeWorkProfileList']> {
    const { data } = await this.client.query({
      query: OFFICE_WORK_PROFILE_LIST,
      variables: { filter },
    });
    return data.officeWorkProfileList;
  }

  // Payroll & Paycheck Services
  async getPayroll(id: string): Promise<Query['managementPayrollGet']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_PAYROLL_GET,
      variables: { id },
    });
    return data.managementPayrollGet;
  }

  async getPayrollList(filter?: any): Promise<Query['managementPayrollList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_PAYROLL_LIST,
      variables: { filter },
    });
    return data.managementPayrollList;
  }

  async getUserPaycheck(id: string): Promise<Query['managementUserPaycheckGet']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_USER_PAYCHECK_GET,
      variables: { id },
    });
    return data.managementUserPaycheckGet;
  }

  async getUserPaycheckList(filter?: any): Promise<Query['managementUserPaycheckList']> {
    const { data } = await this.client.query({
      query: MANAGEMENT_USER_PAYCHECK_LIST,
      variables: { filter },
    });
    return data.managementUserPaycheckList;
  }

  async getOfficeUserPaycheck(id: string): Promise<Query['officeUserPaycheckGet']> {
    const { data } = await this.client.query({
      query: OFFICE_USER_PAYCHECK_GET,
      variables: { id },
    });
    return data.officeUserPaycheckGet;
  }

  async getOfficeUserPaycheckList(filter?: any): Promise<Query['officeUserPaycheckList']> {
    const { data } = await this.client.query({
      query: OFFICE_USER_PAYCHECK_LIST,
      variables: { filter },
    });
    return data.officeUserPaycheckList;
  }

  // Approval & Form Services
  async getApproval(id: string): Promise<Query['approvalGet']> {
    const { data } = await this.client.query({
      query: APPROVAL_GET,
      variables: { id },
    });
    return data.approvalGet;
  }

  async getManagerApprovalFormGroup(id: string): Promise<Query['managerApprovalFormGroupGet']> {
    const { data } = await this.client.query({
      query: MANAGER_APPROVAL_FORM_GROUP_GET,
      variables: { id },
    });
    return data.managerApprovalFormGroupGet;
  }

  async getManagerApprovalFormGroupList(): Promise<Query['managerApprovalFormGroupList']> {
    const { data } = await this.client.query({
      query: MANAGER_APPROVAL_FORM_GROUP_LIST,
    });
    return data.managerApprovalFormGroupList;
  }

  async getOfficeApprovalFilter(): Promise<Query['officeApprovalFilterGet']> {
    const { data } = await this.client.query({
      query: OFFICE_APPROVAL_FILTER_GET,
    });
    return data.officeApprovalFilterGet;
  }

  async getOfficeApprovalFilterList(): Promise<Query['officeApprovalFilterList']> {
    const { data } = await this.client.query({
      query: OFFICE_APPROVAL_FILTER_LIST,
    });
    return data.officeApprovalFilterList;
  }

  async getOfficeApprovalFormList(): Promise<Query['officeApprovalFormGetList']> {
    const { data } = await this.client.query({
      query: OFFICE_APPROVAL_FORM_GET_LIST,
    });
    return data.officeApprovalFormGetList;
  }

  async getOfficeApprovalFormGroupList(): Promise<Query['officeApprovalFormGroupList']> {
    const { data } = await this.client.query({
      query: OFFICE_APPROVAL_FORM_GROUP_LIST,
    });
    return data.officeApprovalFormGroupList;
  }

  async getOfficeApprovalForm(): Promise<Query['officeApprovalGetForm']> {
    const { data } = await this.client.query({
      query: OFFICE_APPROVAL_GET_FORM,
    });
    return data.officeApprovalGetForm;
  }

  async getOfficeApprovalMenuCount(): Promise<Query['officeApprovalMenuCount']> {
    const { data } = await this.client.query({
      query: OFFICE_APPROVAL_MENU_COUNT,
    });
    return data.officeApprovalMenuCount;
  }

  // Car & Meeting Room Services
  async getCarBookingSchedule(id: string, startAt: number, endAt: number): Promise<Query['officeCarBookingGetSchedule']> {
    const { data } = await this.client.query({
      query: OFFICE_CAR_BOOKING_GET_SCHEDULE,
      variables: { id, startAt, endAt },
    });
    return data.officeCarBookingGetSchedule;
  }

  async getCarBookingScheduleList(): Promise<Query['officeCarBookingGetScheduleList']> {
    const { data } = await this.client.query({
      query: OFFICE_CAR_BOOKING_GET_SCHEDULE_LIST,
    });
    return data.officeCarBookingGetScheduleList;
  }

  async getActiveCars(): Promise<Query['officeGetActiveCars']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_ACTIVE_CARS,
    });
    return data.officeGetActiveCars;
  }

  async getBookingCarSchedule(id: string, startAt: number, endAt: number): Promise<Query['officeGetBookingCarSchedule']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_BOOKING_CAR_SCHEDULE,
      variables: { id, startAt, endAt },
    });
    return data.officeGetBookingCarSchedule;
  }

  async getCars(): Promise<Query['officeGetCars']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_CARS,
    });
    return data.officeGetCars;
  }

  async getMeetingDetail(): Promise<Query['officeGetMeetingDetail']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_MEETING_DETAIL,
    });
    return data.officeGetMeetingDetail;
  }

  async getMeetingSchedule(): Promise<Query['officeGetMeetingSchedule']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_MEETING_SCHEDULE,
    });
    return data.officeGetMeetingSchedule;
  }

  async getMeetingRoomList(): Promise<Query['officeMeetingRoomGetList']> {
    const { data } = await this.client.query({
      query: OFFICE_MEETING_ROOM_GET_LIST,
    });
    return data.officeMeetingRoomGetList;
  }

  // Task Management Services
  async getTaskFilter(): Promise<Query['officeTaskFilterGet']> {
    const { data } = await this.client.query({
      query: OFFICE_TASK_FILTER_GET,
    });
    return data.officeTaskFilterGet;
  }

  async getTaskFilterList(): Promise<Query['officeTaskFilterList']> {
    const { data } = await this.client.query({
      query: OFFICE_TASK_FILTER_LIST,
    });
    return data.officeTaskFilterList;
  }

  async getTask(id: string): Promise<Query['officeTaskGet']> {
    const { data } = await this.client.query({
      query: OFFICE_TASK_GET,
      variables: { id },
    });
    return data.officeTaskGet;
  }

  async getTaskList(filter?: any): Promise<Query['officeTaskList']> {
    const { data } = await this.client.query({
      query: OFFICE_TASK_LIST,
      variables: { filter },
    });
    return data.officeTaskList;
  }

  async getTaskReportConfigList(): Promise<Query['officeTaskReportConfigList']> {
    const { data } = await this.client.query({
      query: OFFICE_TASK_REPORT_CONFIG_LIST,
    });
    return data.officeTaskReportConfigList;
  }

  // Permission & Role Services
  async getPermission(): Promise<Query['iamAccessGetPermission']> {
    const { data } = await this.client.query({
      query: IAM_ACCESS_GET_PERMISSION,
    });
    return data.iamAccessGetPermission;
  }

  async getPermissionActionList(): Promise<Query['officePermissionActionGetList']> {
    const { data } = await this.client.query({
      query: OFFICE_PERMISSION_ACTION_GET_LIST,
    });
    return data.officePermissionActionGetList;
  }

  async getPermissionBusinessRoleList(): Promise<Query['officePermissionBusinessRoleGetList']> {
    const { data } = await this.client.query({
      query: OFFICE_PERMISSION_BUSINESS_ROLE_GET_LIST,
    });
    return data.officePermissionBusinessRoleGetList;
  }

  // Other Services
  async getAnalysisNumberOfUserUsedApp(filter?: any): Promise<Query['analysisNumberOfUserUsedApp']> {
    const { data } = await this.client.query({
      query: ANALYSIS_NUMBER_OF_USER_USED_APP,
      variables: { filter },
    });
    return data.analysisNumberOfUserUsedApp;
  }

  async getBusinessRoleAvailableList(): Promise<Query['appBusinessRoleAvailableList']> {
    const { data } = await this.client.query({
      query: APP_BUSINESS_ROLE_AVAILABLE_LIST,
    });
    return data.appBusinessRoleAvailableList;
  }

  async getAdminInfo(id: string): Promise<Query['manageAdminInfoGet']> {
    const { data } = await this.client.query({
      query: MANAGE_ADMIN_INFO_GET,
      variables: { id },
    });
    return data.manageAdminInfoGet;
  }

  async getCallToken(): Promise<Query['officeFetchCallToken']> {
    const { data } = await this.client.query({
      query: OFFICE_FETCH_CALL_TOKEN,
    });
    return data.officeFetchCallToken;
  }

  async getRTMToken(): Promise<Query['officeFetchRTMToken']> {
    const { data } = await this.client.query({
      query: OFFICE_FETCH_RTM_TOKEN,
    });
    return data.officeFetchRTMToken;
  }

  async getTitles(): Promise<Query['officeGetTitles']> {
    const { data } = await this.client.query({
      query: OFFICE_GET_TITLES,
    });
    return data.officeGetTitles;
  }

  async getListSale(filter?: any): Promise<Query['steamGetListSale']> {
    const { data } = await this.client.query({
      query: STEAM_GET_LIST_SALE,
      variables: { filter },
    });
    return data.steamGetListSale;
  }

  async getWhitelistIPs(): Promise<Query['whitelistGetIPs']> {
    const { data } = await this.client.query({
      query: WHITELIST_GET_IPS,
    });
    return data.whitelistGetIPs;
  }
}
