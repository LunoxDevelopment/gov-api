"use client";

import React, { useEffect, useState } from 'react';
import { Table, Button, Dropdown, Menu, Checkbox, Modal, Form, Input, Select, message } from 'antd';
import { DownOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios';

const { Option } = Select;
const { confirm } = Modal;

interface Organization {
  id: number;
  short_code: string;
  name_en: string;
  name_sin?: string | null;
  name_tm?: string | null;
  address?: string | null;
  email?: string | null;
  contact?: string | null;
  category: { id: number; name: string; short_code: string };
  district: { id?: number; name?: string };
  province?: { id?: number; name?: string };
  description?: string | null;
  site_code: string;
}

interface Category {
  id: number;
  name: string;
  short_code: string;
}

interface District {
  id: number;
  name: string;
  province_id: number;
}

interface Province {
  id: number;
  name: string;
}

const ManageOrganizations: React.FC = () => {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [districts, setDistricts] = useState<District[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [provinces, setProvinces] = useState<Province[]>([]);
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    'site_code', 'name_en', 'category', 'district', 'action'
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSiteCodeModalOpen, setIsSiteCodeModalOpen] = useState(false);
  const [editingOrg, setEditingOrg] = useState<Organization | null>(null);
  const [form] = Form.useForm();
  const [siteCodeForm] = Form.useForm();
  const [categoryPrefix, setCategoryPrefix] = useState<string>('');
  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const [isAddDistrictModalOpen, setIsAddDistrictModalOpen] = useState(false);
  const [isAddProvinceModalOpen, setIsAddProvinceModalOpen] = useState(false);
  const [newCategoryForm] = Form.useForm();
  const [newDistrictForm] = Form.useForm();
  const [newProvinceForm] = Form.useForm();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(100);  // Setting the page size to 100

  // Search state
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchOrganizations();
    fetchDistricts();
    fetchCategories();
    fetchProvinces();
  }, [currentPage]); // Re-fetch when current page changes

  const fetchOrganizations = async () => {
    try {
      const response = await axios.get('/api/manage/organization/list', {
        params: {
          page: currentPage,
          pageSize: pageSize,
        }
      });
      setOrganizations(response.data.data);
    } catch (error) {
      console.error('Failed to fetch organizations:', error);
    }
  };

  const fetchDistricts = async () => {
    try {
      const response = await axios.get('/api/manage/district/list');
      setDistricts(response.data.data);
    } catch (error) {
      console.error('Failed to fetch districts:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/manage/category/list');
      setCategories(response.data.data);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const fetchProvinces = async () => {
    try {
      const response = await axios.get('/api/manage/province/list');
      setProvinces(response.data.data);
    } catch (error) {
      console.error('Failed to fetch provinces:', error);
    }
  };

  const handleCategoryChange = (value: number | string) => {
    if (value === 'add_category') {
      openAddCategoryModal();
    } else {
      const selectedCategory = categories.find(category => category.id === value);
      if (selectedCategory) {
        setCategoryPrefix(selectedCategory.short_code);
        if (!editingOrg) { // Only set short_code prefix when adding a new organization
          form.setFieldsValue({
            short_code: `${selectedCategory.short_code}_`,
          });
        }
      }
    }
  };

  const handleDistrictChange = (value: number | string) => {
    if (value === 'add_district') {
      openAddDistrictModal();
    } else {
      const selectedDistrict = districts.find(district => district.id === value);
      if (selectedDistrict) {
        const province = provinces.find(province => province.id === selectedDistrict.province_id);
        if (province) {
          form.setFieldsValue({ province_id: province.id });
        }
      }
    }
  };

  const columns: ColumnsType<Organization> = [
    { title: 'Site Code', dataIndex: 'site_code', key: 'site_code' },
    { title: 'Name (EN)', dataIndex: 'name_en', key: 'name_en' },
    { title: 'Name (SIN)', dataIndex: 'name_sin', key: 'name_sin' },
    { title: 'Name (TM)', dataIndex: 'name_tm', key: 'name_tm' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' },
    {
      title: 'Category',
      dataIndex: ['category', 'name'],
      key: 'category',
      filters: categories.map(category => ({
        text: category.name,
        value: category.id,
      })),
      onFilter: (value, record) => record.category.id === value,
    },
    {
      title: 'District',
      dataIndex: ['district', 'name'],
      key: 'district',
      filters: districts.map(district => ({
        text: district.name,
        value: district.id,
      })),
      onFilter: (value, record) => record.district?.id === value,
    },
    { title: 'Description', dataIndex: 'description', key: 'description' },
    {
      title: 'Action',
      key: 'action',
      render: (_: undefined, record: Organization) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" onClick={() => openEditOrganizationModal(record)}>
                Edit Organization Information
              </Menu.Item>
              <Menu.Item key="setSiteCode" onClick={() => openSetSiteCodeModal(record)}>
                Set Site Code
              </Menu.Item>
              <Menu.Item key="delete" danger onClick={() => showDeleteConfirm(record)}>
                Delete
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button type="link" onClick={e => e.preventDefault()}>
            Edit <DownOutlined />
          </Button>
        </Dropdown>
      ),
    },
  ];

  const handleMenuClick = (e: any) => {
    const { key } = e;
    setVisibleColumns(prev => prev.includes(key) ? prev.filter(col => col !== key) : [...prev, key]);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {columns.map(column => (
        <Menu.Item key={column.key as string}>
          <Checkbox checked={visibleColumns.includes(column.key as string)}>{column.title as string}</Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  const openAddOrganizationModal = () => {
    form.resetFields();
    setEditingOrg(null);
    setCategoryPrefix('');
    setIsModalOpen(true);
  };

  const openEditOrganizationModal = (organization: Organization) => {
    const category = categories.find(cat => cat.id === organization.category.id);
    setEditingOrg(organization);
    setCategoryPrefix(category ? category.short_code : '');
    form.setFieldsValue({
      category_id: organization.category.id,
      district_id: organization.district?.id,
      province_id: organization.province?.id,
      name_en: organization.name_en,
      name_sin: organization.name_sin,
      name_tm: organization.name_tm,
      address: organization.address,
      email: organization.email,
      contact: organization.contact,
      description: organization.description,
      short_code: organization.short_code.replace(`${category?.short_code}_`, '') // Set short code without prefix
    });
    setIsModalOpen(true);
  };
  

  const openSetSiteCodeModal = (organization: Organization) => {
    const category = categories.find(cat => cat.id === organization.category.id);
    setEditingOrg(organization);
    setCategoryPrefix(category ? category.short_code : '');

    const prefixToRemove = category ? `${category.short_code}_` : '';
    const shortCodePart = organization.site_code.startsWith(prefixToRemove)
      ? organization.site_code.replace(prefixToRemove, '')
      : organization.site_code;

    siteCodeForm.setFieldsValue({
      site_code: shortCodePart,
      new_short_code: shortCodePart,
    });
    setIsSiteCodeModalOpen(true);
  };

  const openAddCategoryModal = () => {
    newCategoryForm.resetFields();
    setIsAddCategoryModalOpen(true);
  };

  const openAddDistrictModal = () => {
    newDistrictForm.resetFields();
    setIsAddDistrictModalOpen(true);
  };

  const openAddProvinceModal = () => {
    newProvinceForm.resetFields();
    setIsAddProvinceModalOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      if (editingOrg) {
        // Don't include the short_code in the payload when editing
        const { short_code, ...updateValues } = values;
        await axios.put('/api/manage/organization/edit', {
          id: editingOrg.id,
          ...updateValues,
          category_id: values.category_id,
          district_id: values.district_id,
          name_en: values.name_en,
          name_sin: values.name_sin,
          name_tm: values.name_tm,
          address: values.address,
          email: values.email,
          contact: values.contact,
          description: values.description,
        });
        message.success('Organization updated successfully');
      } else {
        await axios.post('/api/manage/organization/add', {
          ...values,
          short_code: values.short_code.replace(`${categoryPrefix}_`, ''), // Ensure short_code doesn't include the prefix twice
          site_code: `${categoryPrefix}_${values.short_code}`,
        });
        message.success('Organization added successfully');
      }
      setIsModalOpen(false);
      fetchOrganizations();
    } catch (error) {
      console.error('Failed to save organization:', error as any);
      if ((error as any).response && (error as any).response.data && (error as any).response.data.msg) {
        message.error((error as any).response.data.msg);
      } else {
        message.error('Failed to save organization');
      }
    }
  };

  const handleSiteCodeOk = async () => {
    try {
      const values = await siteCodeForm.validateFields();
      await axios.put('/api/manage/organization/edit-site-code', {
        id: editingOrg?.id, // Use id instead of site_code
        new_short_code: values.new_short_code,
      });
      message.success('Site Code updated successfully');
      setIsSiteCodeModalOpen(false);
      fetchOrganizations();
    } catch (error) {
      console.error('Failed to update site code:', error as any);
      if ((error as any).response && (error as any).response.data && (error as any).response.data.msg) {
        message.error((error as any).response.data.msg);
      } else {
        message.error('Failed to update site code');
      }
    }
  };

  const handleAddCategory = async () => {
    try {
      const values = await newCategoryForm.validateFields();
      const response = await axios.post('/api/manage/category/add', values);
      if (response.data.success) {
        message.success('Category added successfully');
        await fetchCategories();  // Re-fetch categories after addition
        setIsAddCategoryModalOpen(false);
      } else {
        message.error(response.data.msg);
      }
    } catch (error) {
      message.error('Failed to add category');
    }
  };

  const handleAddDistrict = async () => {
    try {
      const values = await newDistrictForm.validateFields();
      const response = await axios.post('/api/manage/district/add', values);
      if (response.data.success) {
        message.success('District added successfully');
        await fetchDistricts();  // Re-fetch districts after addition
        setIsAddDistrictModalOpen(false);
      } else {
        message.error(response.data.msg);
      }
    } catch (error) {
      message.error('Failed to add district');
    }
  };

  const handleAddProvince = async () => {
    try {
      const values = await newProvinceForm.validateFields();
      const response = await axios.post('/api/manage/province/add', values);
      if (response.data.success) {
        message.success('Province added successfully');
        await fetchProvinces();  // Re-fetch provinces after addition
        setIsAddProvinceModalOpen(false);
      } else {
        message.error(response.data.msg);
      }
    } catch (error) {
      message.error('Failed to add province');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsSiteCodeModalOpen(false);
    setIsAddCategoryModalOpen(false);
    setIsAddDistrictModalOpen(false);
    setIsAddProvinceModalOpen(false);
  };

  const showDeleteConfirm = (organization: Organization) => {
    confirm({
      title: 'Are you sure you want to delete this organization?',
      icon: <ExclamationCircleOutlined />,
      content: `Organization: ${organization.name_en}`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        try {
          await axios.delete('/api/manage/organization/remove', { data: { id: organization.id } });
          message.success('Organization deleted successfully');
          fetchOrganizations();
        } catch (error) {
          console.error('Failed to delete organization:', error as any);
          if ((error as any).response && (error as any).response.data && (error as any).response.data.msg) {
            message.error((error as any).response.data.msg);
          } else {
            message.error('Failed to delete organization');
          }
        }
      },
    });
  };

  const rowClassName = (record: Organization, index: number) => {
    const hasNoShortCode = !record.short_code || record.short_code.trim() === '';
    const isDuplicateSiteCode = organizations.filter(org => org.site_code === record.site_code).length > 1;

    if (hasNoShortCode) {
      return 'warning-row';
    }
    if (isDuplicateSiteCode) {
      return 'error-row';
    }
    return '';
  };

  // Filter organizations based on search text
  const filteredOrganizations = organizations.filter(org =>
    org.name_en.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={openAddOrganizationModal}>Add Organization</Button>
        <Dropdown overlay={menu}>
          <Button style={{ marginLeft: 8 }}>
            Columns <DownOutlined />
          </Button>
        </Dropdown>
        <Input.Search
          placeholder="Search by Organization Name (EN)"
          onChange={e => setSearchText(e.target.value)}
          style={{ width: 300, marginLeft: 16 }}
        />
      </div>
      <Table
        columns={columns.filter(column => visibleColumns.includes(column.key as string))}
        dataSource={filteredOrganizations}
        rowKey="id"
        rowClassName={rowClassName}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          onChange: (page) => setCurrentPage(page),
        }}
      />

      <Modal
        title={editingOrg ? "Edit Organization" : "Add Organization"}
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="category_id" label="Category" rules={[{ required: true, message: 'Please select a category!' }]}>
            <Select onChange={handleCategoryChange}>
              {categories.map((category) => (
                <Option key={category.id} value={category.id} short_code={category.short_code}>
                  {category.name}
                </Option>
              ))}
              <Option key="add_category" value="add_category">
                Add Category
              </Option>
            </Select>
          </Form.Item>
          <Form.Item name="short_code" label="Short Code" rules={[{ required: false, message: 'Please input the short code!' }]}>
            <Input addonBefore={`${categoryPrefix}_`} disabled={!!editingOrg} />
          </Form.Item>
          <Form.Item name="name_en" label="Name (EN)" rules={[{ required: true, message: 'Please input the name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="district_id" label="District">
            <Select onChange={handleDistrictChange}>
              {districts.map((district) => (
                <Option key={district.id} value={district.id}>{district.name}</Option>
              ))}
              <Option key="add_district" value="add_district">
                Add District
              </Option>
            </Select>
          </Form.Item>
          <Form.Item name="address" label="Address">
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input />
          </Form.Item>
          <Form.Item name="contact" label="Contact">
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Set Site Code"
        visible={isSiteCodeModalOpen}
        onOk={handleSiteCodeOk}
        onCancel={handleCancel}
        bodyStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
      >
        <Form form={siteCodeForm} layout="vertical">
          <Form.Item name="site_code" label="Current Site Code">
            <Input addonBefore={`${categoryPrefix}_`} disabled />
          </Form.Item>
          <Form.Item name="new_short_code" label="New Short Code" rules={[{ required: true, message: 'Please input the new short code!' }]}>
            <Input addonBefore={`${categoryPrefix}_`} />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Add New Category"
        visible={isAddCategoryModalOpen}
        onOk={handleAddCategory}
        onCancel={handleCancel}
      >
        <Form form={newCategoryForm} layout="vertical">
          <Form.Item name="name" label="Category Name" rules={[{ required: true, message: 'Please input the category name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input />
          </Form.Item>
          <Form.Item name="short_code" label="Short Code" rules={[{ required: true, message: 'Please input the short code!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Add New District"
        visible={isAddDistrictModalOpen}
        onOk={handleAddDistrict}
        onCancel={handleCancel}
      >
        <Form form={newDistrictForm} layout="vertical">
          <Form.Item name="name" label="District Name" rules={[{ required: true, message: 'Please input the district name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item name="province_id" label="Province">
            <Input disabled />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Add New Province"
        visible={isAddProvinceModalOpen}
        onOk={handleAddProvince}
        onCancel={handleCancel}
      >
        <Form form={newProvinceForm} layout="vertical">
          <Form.Item name="name" label="Province Name" rules={[{ required: true, message: 'Please input the province name!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ManageOrganizations;
