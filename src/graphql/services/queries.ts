import { gql } from '@apollo/client';

// Address Queries
export const ADDRESS_GET_COUNTRIES = gql`
  query AddressGetCountries($filter: AddressZoneFilterArgs, $keyword: String) {
    addressGetCountries(filter: $filter, keyword: $keyword) {
      items {
        id
        name
        code
        phoneCode
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ADDRESS_GET_DISTRICTS = gql`
  query AddressGetDistricts($filter: AddressZoneFilterArgs, $keyword: String, $provinceId: String) {
    addressGetDistricts(filter: $filter, keyword: $keyword, provinceId: $provinceId) {
      items {
        id
        name
        code
        provinceId
        province {
          id
          name
          code
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ADDRESS_GET_LOCATION_BY_TEXT = gql`
  query AddressGetLocationByText($params: AddressTextArgs!) {
    addressGetLocationByText(params: $params) {
      items {
        id
        name
        address
        latitude
        longitude
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ADDRESS_GET_PROVINCES = gql`
  query AddressGetProvinces($countryId: String, $filter: AddressZoneFilterArgs, $keyword: String) {
    addressGetProvinces(countryId: $countryId, filter: $filter, keyword: $keyword) {
      items {
        id
        name
        code
        countryId
        country {
          id
          name
          code
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ADDRESS_GET_WARDS = gql`
  query AddressGetWards($districtId: String!, $filter: AddressZoneFilterArgs, $keyword: String) {
    addressGetWards(districtId: $districtId, filter: $filter, keyword: $keyword) {
      items {
        id
        name
        code
        districtId
        district {
          id
          name
          code
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ADDRESS_GET_ZONE_BY_LOCATION = gql`
  query AddressGetZoneByLocation($params: LocationArgs!) {
    addressGetZoneByLocation(params: $params) {
      id
      name
      address
      latitude
      longitude
      ward {
        id
        name
        code
      }
      district {
        id
        name
        code
      }
      province {
        id
        name
        code
      }
      country {
        id
        name
        code
      }
      createdAt
      updatedAt
    }
  }
`;

export const ADDRESS_ZONE_GET_LIST = gql`
  query AddressZoneGetList($filter: AddressZoneFilterArgs) {
    addressZoneGetList(filter: $filter) {
      items {
        id
        name
        code
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Organization & Admin Queries
export const ADMIN_ORG_CHART_LIST = gql`
  query AdminOrgChartList($filter: SysOrgChartFilter) {
    adminOrgChartList(filter: $filter) {
      items {
        id
        name
        code
        parentId
        children {
          id
          name
          code
          parentId
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ORGANIZATION_GET_BY_CODE = gql`
  query OrganizationGetByCode($code: String!) {
    organizationGetByCode(code: $code) {
      id
      name
      code
      phone
      email
      address
      createdAt
      updatedAt
    }
  }
`;

export const ORGANIZATION_GET_BY_PHONE = gql`
  query OrganizationGetByPhone($phone: String!) {
    organizationGetByPhone(phone: $phone) {
      items {
        id
        name
        code
        phone
        email
        address
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ORGANIZATION_GET_GROUP = gql`
  query OrganizationGetGroup {
    organizationGetGroup {
      items {
        id
        name
        code
        phone
        email
        address
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const ORGANIZATION_GET_LIST = gql`
  query OrganizationGetList($filter: OrganizationFilterInput) {
    organizationGetList(filter: $filter) {
      items {
        id
        name
        code
        phone
        email
        address
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const GET_LIST_ORGANIZATION_DEVICES = gql`
  query GetListOrganizationDevices($filter: OrganizationDeviceFilterInput) {
    getListOrganizationDevices(filter: $filter) {
      items {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const GET_LIST_ORGANIZATION_DEVICES_APPROVED = gql`
  query GetListOrganizationDevicesApproved {
    getListOrganizationDevicesApproved {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }
`;

// App & Notification Queries
export const APP_NOTIFICATION_GET_LIST = gql`
  query AppNotificationGetList($filter: AppNotificationFilterArgs) {
    appNotificationGetList(filter: $filter) {
      notifications {
        id
        title
        content
        type
        status
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const NOTIFICATION_GET_LIST = gql`
  query NotificationGetList {
    notificationGetList {
      notifications {
        id
        title
        content
        type
        status
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const OFFICE_GET_NOTIFICATION_CAMPAIGN_LIST = gql`
  query OfficeGetNotificationCampaignList {
    officeGetNotificationCampaignList {
      items {
        id
        title
        content
        type
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Chat Queries
export const CHAT_CONVERSATION_DETAIL = gql`
  query ChatConversationDetail($conversationId: String, $receiverId: String) {
    chatConversationDetail(conversationId: $conversationId, receiverId: $receiverId) {
      id
      name
      type
      backgroundUrl
      imgUrl
      description
      groupType
      lastMessage {
        id
        message
        type
        createdAt
        sender {
          id
          name
          avatar
        }
      }
      lastMessageAt
      lastMessageId
      members {
        id
        admin
        connected
        hide
        lastMessageReadId
        unreadCount
        user {
          id
          name
          avatar
        }
      }
      creator {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHAT_CONVERSATION_LIST = gql`
  query ChatConversationList($filters: ChatConversationListFilter) {
    chatConversationList(filters: $filters) {
      conversations {
        id
        name
        type
        backgroundUrl
        imgUrl
        description
        groupType
        lastMessage {
          id
          message
          type
          createdAt
          sender {
            id
            name
            avatar
          }
        }
        lastMessageAt
        lastMessageId
        members {
          id
          admin
          connected
          hide
          lastMessageReadId
          unreadCount
          user {
            id
            name
            avatar
          }
        }
        creator {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const CHAT_MESSAGE_LIST = gql`
  query ChatMessageList($filters: ChatMessageGetListFilter!) {
    chatMessageList(filters: $filters) {
      messages {
        id
        message
        type
        conversationId
        sender {
          id
          name
          avatar
        }
        replyMessage {
          id
          message
          type
        }
        forwardedFromMessage {
          id
          message
          type
        }
        createdAt
        updatedAt
      }
      lastKey {
        conversationId
        createdAt
      }
    }
  }
`;

export const CHAT_SEARCH = gql`
  query ChatSearch($filters: ChatSearchArgs!) {
    chatSearch(filters: $filters) {
      id
      message
      type
      conversationId
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

export const OFFICE_CHAT_LINK_PREVIEW = gql`
  query OfficeChatLinkPreview {
    officeChatLinkPreview {
      id
      title
      description
      image
      url
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_CHAT_MESSAGE_SEARCH = gql`
  query OfficeChatMessageSearch {
    officeChatMessageSearch {
      items {
        id
        message
        type
        conversationId
        sender {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Check-in Queries
export const CHECK_IN_GET_BEACON_LIST = gql`
  query CheckInGetBeaconList($limit: Int, $page: Int) {
    checkInGetBeaconList(limit: $limit, page: $page) {
      items {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const CHECK_IN_GET_DETAIL = gql`
  query CheckInGetDetail($id: String!) {
    checkInGetDetail(id: $id) {
      id
      type
      status
      place {
        id
        name
        address
      }
      user {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_GET_HISTORIES = gql`
  query CheckInGetHistories($filter: CheckInHistoryFilter) {
    checkInGetHistories(filter: $filter) {
      items {
        id
        type
        status
        place {
          id
          name
          address
        }
        user {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const CHECK_IN_GET_PLACE = gql`
  query CheckInGetPlace($id: String!) {
    checkInGetPlace(id: $id) {
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

export const CHECK_IN_GET_PLACE_LIST = gql`
  query CheckInGetPlaceList($filter: CheckInPlaceFilter) {
    checkInGetPlaceList(filter: $filter) {
      items {
        id
        name
        address
        type
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const CHECK_IN_GET_UP_TIME = gql`
  query CheckInGetUpTime($id: String!) {
    checkInGetUpTime(id: $id) {
      id
      time
      type
      createdAt
      updatedAt
    }
  }
`;

export const CHECK_IN_GET_UP_TIME_BY_PLACE = gql`
  query CheckInGetUpTimeByPlace($placeId: String!) {
    checkInGetUpTimeByPlace(placeId: $placeId) {
      id
      time
      type
      createdAt
      updatedAt
    }
  }
`;

// Document Queries
export const DOCUMENT_FOLDER_ELEMENTS = gql`
  query DocumentFolderElements($filter: DocumentElementFilter, $folderId: String, $order: DocumentOrderBy) {
    documentFolderElements(filter: $filter, folderId: $folderId, order: $order) {
      elements {
        id
        name
        type
        size
        url
        createdAt
        updatedAt
      }
      count
      total
      userPermissions {
        allows {
          id
          name
          type
        }
        denys {
          id
          name
          type
        }
      }
    }
  }
`;

export const DOCUMENT_FOLDER_TREE = gql`
  query DocumentFolderTree($parentId: String) {
    documentFolderTree(parentId: $parentId) {
      folders {
        id
        name
        parentId
        children {
          id
          name
          parentId
        }
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const DOCUMENT_GET_FILE = gql`
  query DocumentGetFile($id: String!) {
    documentGetFile(id: $id) {
      id
      name
      type
      size
      url
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_GET_FOLDER = gql`
  query DocumentGetFolder($id: String!) {
    documentGetFolder(id: $id) {
      id
      name
      parentId
      children {
        id
        name
        parentId
      }
      createdAt
      updatedAt
    }
  }
`;

export const DOCUMENT_SEARCH_ELEMENTS = gql`
  query DocumentSearchElements($filter: DocumentElementFilter, $folderId: String, $order: DocumentOrderBy) {
    documentSearchElements(filter: $filter, folderId: $folderId, order: $order) {
      elements {
        id
        name
        type
        size
        url
        createdAt
        updatedAt
      }
      count
      total
      userPermissions {
        allows {
          id
          name
          type
        }
        denys {
          id
          name
          type
        }
      }
    }
  }
`;

export const OFFICE_DOCUMENT_TAG_LIST = gql`
  query OfficeDocumentTagList {
    officeDocumentTagList {
      items {
        id
        name
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Identity & Profile Queries
export const IDENTITY_PROFILE = gql`
  query IdentityProfile {
    identityProfile {
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

export const IDENTITY_BANK_GET_LIST = gql`
  query IdentityBankGetList {
    identityBankGetList {
      banks {
        id
        name
        code
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const IDENTITY_CARRIER_GET_LIST = gql`
  query IdentityCarrierGetList {
    identityCarrierGetList {
      carriers {
        id
        name
        code
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const IDENTIFY_CARD_PLACE_LIST = gql`
  query IdentifyCardPlaceList($filter: IdentifyCardPlaceFilterInput) {
    identifyCardPlaceList(filter: $filter) {
      items {
        id
        name
        type
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const PROFILE_GET_BLOCKS = gql`
  query ProfileGetBlocks {
    profileGetBlocks {
      fields {
        id
        name
        type
        value
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const PROFILE_GET_FIELDS = gql`
  query ProfileGetFields {
    profileGetFields {
      fields {
        id
        name
        type
        value
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

// Learning Management Queries
export const MANAGE_LEARNING_ADDRESS_GET = gql`
  query ManageLearningAddressGet($id: String!) {
    manageLearningAddressGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_ADDRESS_LIST = gql`
  query ManageLearningAddressList($filter: LearningAddressFilterInput) {
    manageLearningAddressList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_LEARNING_CERTIFICATE_GET = gql`
  query ManageLearningCertificateGet($id: String!) {
    manageLearningCertificateGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_CERTIFICATE_LIST = gql`
  query ManageLearningCertificateList($filter: LearningCertificateFilterInput) {
    manageLearningCertificateList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_LEARNING_COURSE_GET = gql`
  query ManageLearningCourseGet($id: String!) {
    manageLearningCourseGet(id: $id) {
      id
      name
      description
      content
      sections {
        id
        name
        description
      }
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_COURSE_LIST = gql`
  query ManageLearningCourseList($filter: LearningCourseFilterInput) {
    manageLearningCourseList(filter: $filter) {
      items {
        id
        name
        description
        content
        sections {
          id
          name
          description
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_LEARNING_LESSON_GET = gql`
  query ManageLearningLessonGet($id: String!) {
    manageLearningLessonGet(id: $id) {
      id
      name
      description
      content
      courseId
      course {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_LESSON_LIST = gql`
  query ManageLearningLessonList($filter: LearningLessonFilterInput) {
    manageLearningLessonList(filter: $filter) {
      items {
        id
        name
        description
        content
        courseId
        course {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_LEARNING_PROJECT_GET = gql`
  query ManageLearningProjectGet($id: String!) {
    manageLearningProjectGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_PROJECT_LIST = gql`
  query ManageLearningProjectList($filter: LearningProjectFilterInput) {
    manageLearningProjectList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_LEARNING_SECTION_GET = gql`
  query ManageLearningSectionGet($id: String!) {
    manageLearningSectionGet(id: $id) {
      id
      name
      description
      courseId
      course {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_SECTION_LIST = gql`
  query ManageLearningSectionList($filter: LearningSectionFilterInput) {
    manageLearningSectionList(filter: $filter) {
      items {
        id
        name
        description
        courseId
        course {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_LEARNING_SKILL_GET = gql`
  query ManageLearningSkillGet($id: String!) {
    manageLearningSkillGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_LEARNING_SKILL_LIST = gql`
  query ManageLearningSkillList($filter: LearningSkillFilterInput) {
    manageLearningSkillList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Office Learning Management Queries
export const OFFICE_LEARNING_CERTIFICATE_GET = gql`
  query OfficeLearningCertificateGet($id: String!) {
    officeLearningCertificateGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_LEARNING_CERTIFICATE_LIST = gql`
  query OfficeLearningCertificateList($filter: LearningCertificateFilterInput) {
    officeLearningCertificateList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_LEARNING_COURSE_GET = gql`
  query OfficeLearningCourseGet($id: String!) {
    officeLearningCourseGet(id: $id) {
      id
      name
      description
      content
      sections {
        id
        name
        description
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_LEARNING_COURSE_LIST = gql`
  query OfficeLearningCourseList($filter: LearningCourseFilterInput) {
    officeLearningCourseList(filter: $filter) {
      items {
        id
        name
        description
        content
        sections {
          id
          name
          description
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_LEARNING_LESSON_GET = gql`
  query OfficeLearningLessonGet($id: String!) {
    officeLearningLessonGet(id: $id) {
      id
      name
      description
      content
      courseId
      course {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_LEARNING_LESSON_LIST = gql`
  query OfficeLearningLessonList($filter: LearningLessonFilterInput) {
    officeLearningLessonList(filter: $filter) {
      items {
        id
        name
        description
        content
        courseId
        course {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_LEARNING_PROJECT_GET = gql`
  query OfficeLearningProjectGet($id: String!) {
    officeLearningProjectGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_LEARNING_PROJECT_LIST = gql`
  query OfficeLearningProjectList($filter: LearningProjectFilterInput) {
    officeLearningProjectList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_LEARNING_SECTION_GET = gql`
  query OfficeLearningSectionGet($id: String!) {
    officeLearningSectionGet(id: $id) {
      id
      name
      description
      courseId
      course {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_LEARNING_SECTION_LIST = gql`
  query OfficeLearningSectionList($filter: LearningSectionFilterInput) {
    officeLearningSectionList(filter: $filter) {
      items {
        id
        name
        description
        courseId
        course {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_LEARNING_SKILL_GET = gql`
  query OfficeLearningSkillGet($id: String!) {
    officeLearningSkillGet(id: $id) {
      id
      name
      description
      type
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_LEARNING_SKILL_LIST = gql`
  query OfficeLearningSkillList($filter: LearningSkillFilterInput) {
    officeLearningSkillList(filter: $filter) {
      items {
        id
        name
        description
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Wiki Management Queries
export const MANAGE_WIKI_CATEGORY_GET = gql`
  query ManageWikiCategoryGet($id: String!) {
    manageWikiCategoryGet(id: $id) {
      id
      name
      description
      parentId
      parent {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const MANAGE_WIKI_CATEGORY_LIST = gql`
  query ManageWikiCategoryList($filter: WikiCategoryFilterInput) {
    manageWikiCategoryList(filter: $filter) {
      items {
        id
        name
        description
        parentId
        parent {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGE_WIKI_GET = gql`
  query ManageWikiGet($id: String!) {
    manageWikiGet(id: $id) {
      id
      title
      content
      categoryId
      category {
        id
        name
      }
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

export const MANAGE_WIKI_LIST = gql`
  query ManageWikiList($filter: ManageWikiFilter) {
    manageWikiList(filter: $filter) {
      items {
        id
        title
        content
        categoryId
        category {
          id
          name
        }
        author {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_WIKI_CATEGORY_LIST = gql`
  query OfficeWikiCategoryList($filter: WikiCategoryFilterInput) {
    officeWikiCategoryList(filter: $filter) {
      items {
        id
        name
        description
        parentId
        parent {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_WIKI_GET = gql`
  query OfficeWikiGet($id: String!) {
    officeWikiGet(id: $id) {
      id
      title
      content
      categoryId
      category {
        id
        name
      }
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

export const OFFICE_WIKI_LATEST_LIST = gql`
  query OfficeWikiLatestList {
    officeWikiLatestList {
      items {
        id
        title
        content
        categoryId
        category {
          id
          name
        }
        author {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_WIKI_LIST = gql`
  query OfficeWikiList($filter: OfficeWikiFilter) {
    officeWikiList(filter: $filter) {
      items {
        id
        title
        content
        categoryId
        category {
          id
          name
        }
        author {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Asset Management Queries
export const MANAGEMENT_ASSET_GET = gql`
  query ManagementAssetGet($id: String!) {
    managementAssetGet(id: $id) {
      id
      name
      type
      status
      assignedTo {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const MANAGEMENT_ASSET_LIST = gql`
  query ManagementAssetList($filter: AssetFilterInput) {
    managementAssetList(filter: $filter) {
      items {
        id
        name
        type
        status
        assignedTo {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGEMENT_CATEGORY_ASSET_LIST = gql`
  query ManagementCategoryAssetList($filter: CategoryAssetFilterInput) {
    managementCategoryAssetList(filter: $filter) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGEMENT_WAREHOUSE_ASSET_LIST = gql`
  query ManagementWarehouseAssetList($filter: WarehouseAssetFilterInput) {
    managementWarehouseAssetList(filter: $filter) {
      items {
        id
        name
        type
        status
        warehouse {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Employee & User Management Queries
export const MANAGEMENT_GET_EMPLOYEE = gql`
  query ManagementGetEmployee($id: String!) {
    managementGetEmployee(id: $id) {
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

export const MANAGEMENT_GET_EMPLOYEE_LIST = gql`
  query ManagementGetEmployeeList($filter: OfficeUserFilterInput) {
    managementGetEmployeeList(filter: $filter) {
      items {
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
      total
    }
  }
`;

export const MANAGEMENT_GET_EMPLOYEE_SCHEDULE = gql`
  query ManagementGetEmployeeSchedule($id: String!, $startAt: Float!, $endAt: Float!) {
    managementGetEmployeeSchedule(id: $id, startAt: $startAt, endAt: $endAt) {
      items {
        id
        title
        description
        startTime
        endTime
        type
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const MANAGEMENT_LIST_EMPLOYEE_OF_ORG_CHART = gql`
  query ManagementListEmployeeOfOrgChart {
    managementListEmployeeOfOrgChart {
      items {
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
      total
    }
  }
`;

export const OFFICE_EMPLOYEE_FULL_ORG_CHART_LIST = gql`
  query OfficeEmployeeFullOrgChartList {
    officeEmployeeFullOrgChartList {
      items {
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
      total
    }
  }
`;

export const OFFICE_LIST_EMPLOYEE_OF_ORG_CHART = gql`
  query OfficeListEmployeeOfOrgChart {
    officeListEmployeeOfOrgChart {
      items {
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
      total
    }
  }
`;

export const OFFICE_SYS_USER_GET_LIST = gql`
  query OfficeSysUserGetList {
    officeSysUserGetList {
      items {
        id
        username
        email
        role {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Work Profile Queries
export const MANAGEMENT_WORK_PROFILE_GET = gql`
  query ManagementWorkProfileGet($id: String!) {
    managementWorkProfileGet(id: $id) {
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

export const MANAGEMENT_WORK_PROFILE_GET_SOFT_FIELDS = gql`
  query ManagementWorkProfileGetSoftFields {
    managementWorkProfileGetSoftFields {
      id
      name
      type
      value
      createdAt
      updatedAt
    }
  }
`;

export const MANAGEMENT_WORK_PROFILE_INFO_TYPE_GET_LIST = gql`
  query ManagementWorkProfileInfoTypeGetList {
    managementWorkProfileInfoTypeGetList {
      id
      name
      type
      createdAt
      updatedAt
    }
  }
`;

export const MANAGEMENT_WORK_PROFILE_LIST = gql`
  query ManagementWorkProfileList($filter: WorkProfileFilterInput) {
    managementWorkProfileList(filter: $filter) {
      items {
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
      total
    }
  }
`;

export const OFFICE_WORK_PROFILE_LIST = gql`
  query OfficeWorkProfileList($filter: WorkProfileFilterInput) {
    officeWorkProfileList(filter: $filter) {
      items {
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
      total
    }
  }
`;

// Payroll & Paycheck Queries
export const MANAGEMENT_PAYROLL_GET = gql`
  query ManagementPayrollGet($id: String!) {
    managementPayrollGet(id: $id) {
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

export const MANAGEMENT_PAYROLL_LIST = gql`
  query ManagementPayrollList($filter: PayrollFilterInput) {
    managementPayrollList(filter: $filter) {
      items {
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
      total
    }
  }
`;

export const MANAGEMENT_USER_PAYCHECK_GET = gql`
  query ManagementUserPaycheckGet($id: String!) {
    managementUserPaycheckGet(id: $id) {
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

export const MANAGEMENT_USER_PAYCHECK_LIST = gql`
  query ManagementUserPaycheckList($filter: UserPaycheckFilterInput) {
    managementUserPaycheckList(filter: $filter) {
      items {
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
      total
    }
  }
`;

export const OFFICE_USER_PAYCHECK_GET = gql`
  query OfficeUserPaycheckGet($id: String!) {
    officeUserPaycheckGet(id: $id) {
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

export const OFFICE_USER_PAYCHECK_LIST = gql`
  query OfficeUserPaycheckList($filter: UserPaycheckFilterInput) {
    officeUserPaycheckList(filter: $filter) {
      items {
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
      total
    }
  }
`;

// Approval & Form Queries
export const APPROVAL_GET = gql`
  query ApprovalGet($id: String!) {
    approvalGet(id: $id) {
      id
      title
      content
      status
      type
      createdAt
      updatedAt
    }
  }
`;

export const MANAGER_APPROVAL_FORM_GROUP_GET = gql`
  query ManagerApprovalFormGroupGet($id: String!) {
    managerApprovalFormGroupGet(id: $id) {
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

export const MANAGER_APPROVAL_FORM_GROUP_LIST = gql`
  query ManagerApprovalFormGroupList {
    managerApprovalFormGroupList {
      items {
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
      total
    }
  }
`;

export const OFFICE_APPROVAL_FILTER_GET = gql`
  query OfficeApprovalFilterGet {
    officeApprovalFilterGet {
      id
      name
      type
      conditions {
        field
        operator
        value
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_APPROVAL_FILTER_LIST = gql`
  query OfficeApprovalFilterList {
    officeApprovalFilterList {
      items {
        id
        name
        type
        conditions {
          field
          operator
          value
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_APPROVAL_FORM_GET_LIST = gql`
  query OfficeApprovalFormGetList {
    officeApprovalFormGetList {
      items {
        id
        name
        type
        fields {
          id
          name
          type
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_APPROVAL_FORM_GROUP_LIST = gql`
  query OfficeApprovalFormGroupList {
    officeApprovalFormGroupList {
      items {
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
      total
    }
  }
`;

export const OFFICE_APPROVAL_GET_FORM = gql`
  query OfficeApprovalGetForm {
    officeApprovalGetForm {
      id
      name
      type
      fields {
        id
        name
        type
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_APPROVAL_MENU_COUNT = gql`
  query OfficeApprovalMenuCount {
    officeApprovalMenuCount {
      items {
        id
        name
        count
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Car & Meeting Room Queries
export const OFFICE_CAR_BOOKING_GET_SCHEDULE = gql`
  query OfficeCarBookingGetSchedule($id: String!, $startAt: Float!, $endAt: Float!) {
    officeCarBookingGetSchedule(id: $id, startAt: $startAt, endAt: $endAt) {
      id
      car {
        id
        name
      }
      bookings {
        id
        startTime
        endTime
        bookedBy {
          id
          name
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_CAR_BOOKING_GET_SCHEDULE_LIST = gql`
  query OfficeCarBookingGetScheduleList {
    officeCarBookingGetScheduleList {
      items {
        id
        car {
          id
          name
        }
        bookings {
          id
          startTime
          endTime
          bookedBy {
            id
            name
          }
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_GET_ACTIVE_CARS = gql`
  query OfficeGetActiveCars {
    officeGetActiveCars {
      items {
        id
        name
        type
        plateNumber
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_GET_BOOKING_CAR_SCHEDULE = gql`
  query OfficeGetBookingCarSchedule($id: String!, $startAt: Float!, $endAt: Float!) {
    officeGetBookingCarSchedule(id: $id, startAt: $startAt, endAt: $endAt) {
      items {
        id
        car {
          id
          name
        }
        startTime
        endTime
        bookedBy {
          id
          name
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_GET_CARS = gql`
  query OfficeGetCars {
    officeGetCars {
      items {
        id
        name
        type
        plateNumber
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_GET_MEETING_DETAIL = gql`
  query OfficeGetMeetingDetail {
    officeGetMeetingDetail {
      id
      title
      description
      startTime
      endTime
      participants {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_GET_MEETING_SCHEDULE = gql`
  query OfficeGetMeetingSchedule {
    officeGetMeetingSchedule {
      items {
        id
        title
        description
        startTime
        endTime
        participants {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_MEETING_ROOM_GET_LIST = gql`
  query OfficeMeetingRoomGetList {
    officeMeetingRoomGetList {
      items {
        id
        name
        capacity
        status
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Task Management Queries
export const OFFICE_TASK_FILTER_GET = gql`
  query OfficeTaskFilterGet {
    officeTaskFilterGet {
      id
      name
      type
      conditions {
        field
        operator
        value
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_TASK_FILTER_LIST = gql`
  query OfficeTaskFilterList {
    officeTaskFilterList {
      items {
        id
        name
        type
        conditions {
          field
          operator
          value
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_TASK_GET = gql`
  query OfficeTaskGet($id: String!) {
    officeTaskGet(id: $id) {
      id
      title
      description
      status
      priority
      assignee {
        id
        name
        avatar
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_TASK_LIST = gql`
  query OfficeTaskList($filter: OfficeTaskFilterInput) {
    officeTaskList(filter: $filter) {
      items {
        id
        title
        description
        status
        priority
        assignee {
          id
          name
          avatar
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_TASK_REPORT_CONFIG_LIST = gql`
  query OfficeTaskReportConfigList {
    officeTaskReportConfigList {
      items {
        id
        name
        type
        config {
          field
          operator
          value
        }
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Permission & Role Queries
export const IAM_ACCESS_GET_PERMISSION = gql`
  query IamAccessGetPermission {
    iamAccessGetPermission {
      id
      name
      code
      description
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_PERMISSION_ACTION_GET_LIST = gql`
  query OfficePermissionActionGetList {
    officePermissionActionGetList {
      items {
        id
        name
        code
        description
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const OFFICE_PERMISSION_BUSINESS_ROLE_GET_LIST = gql`
  query OfficePermissionBusinessRoleGetList {
    officePermissionBusinessRoleGetList {
      items {
        id
        name
        code
        description
        createdAt
        updatedAt
      }
      total
    }
  }
`;

// Other Queries
export const ANALYSIS_NUMBER_OF_USER_USED_APP = gql`
  query AnalysisNumberOfUserUsedApp($filter: AnalysisNumberOfUserUsedAppFilter) {
    analysisNumberOfUserUsedApp(filter: $filter) {
      total
      items {
        id
        name
        count
        createdAt
        updatedAt
      }
    }
  }
`;

export const APP_BUSINESS_ROLE_AVAILABLE_LIST = gql`
  query AppBusinessRoleAvailableList {
    appBusinessRoleAvailableList {
      businessRoles {
        id
        name
        code
        description
        createdAt
        updatedAt
      }
      count
      total
    }
  }
`;

export const MANAGE_ADMIN_INFO_GET = gql`
  query ManageAdminInfoGet($id: String!) {
    manageAdminInfoGet(id: $id) {
      id
      username
      email
      role {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;

export const OFFICE_FETCH_CALL_TOKEN = gql`
  query OfficeFetchCallToken {
    officeFetchCallToken {
      token
      expiresAt
    }
  }
`;

export const OFFICE_FETCH_RTM_TOKEN = gql`
  query OfficeFetchRTMToken {
    officeFetchRTMToken {
      token
      expiresAt
    }
  }
`;

export const OFFICE_GET_TITLES = gql`
  query OfficeGetTitles {
    officeGetTitles {
      items {
        id
        name
        code
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const STEAM_GET_LIST_SALE = gql`
  query SteamGetListSale($filter: OrganizationFilterInput) {
    steamGetListSale(filter: $filter) {
      items {
        id
        name
        code
        phone
        email
        address
        createdAt
        updatedAt
      }
      total
    }
  }
`;

export const WHITELIST_GET_IPS = gql`
  query WhitelistGetIPs {
    whitelistGetIPs {
      items {
        id
        ip
        note
        createdAt
        updatedAt
      }
      total
    }
  }
`;
