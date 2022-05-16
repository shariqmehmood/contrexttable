import React, { useState } from 'react';
import { Table, Divider, Space, Input, Button } from 'antd';
import data from './data';
import Highlighter from 'react-highlight-words';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';

const columns = [
    {
        title: "S.NO",
        dataIndex: "key"
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a style={{ fontSize: "15px", color: "black", fontFamily: "bold" }}>{text}</a>,
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {


            return (
                <>

                    <div style={{ padding: 8 }}>
                        <Input

                            placeholder="Search Here"
                            autoFocus={true}
                            value={selectedKeys[0]}
                            onChange={e => {
                                setSelectedKeys(e.target.value ? [e.target.value] : []);
                                // confirm({closeDropdown:false})
                            }}
                            onPressEnter={() => { confirm() }}
                            style={{ marginBottom: 8, display: 'block' }}
                        />
                        <Space>
                            <Button
                                type="primary"
                                onClick={() => { confirm() }}
                                icon={<SearchOutlined />}
                                size="small"
                                style={{ width: 90 }}
                            >
                                Search
                            </Button>
                            <Button
                                type='danger'
                                onClick={() => clearFilters()}
                                icon={<DeleteOutlined />}
                                size="small"
                                style={{ width: 90 }}>
                                Reset
                            </Button>
                        </Space>
                    </div>

                </>
            )
        },
        filterIcon: () => {
            return <SearchOutlined style={{ fontSize: "15px" }} />
        },

        onFilter: (value, record) => {
            return record.name.toLowerCase().includes(value.toLowerCase())
        },
    },
    {
        title: 'Age',
        dataIndex: 'age',
        render: (text) => <a>{text} Year</a>,
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    }, {
        title: 'country',
        dataIndex: 'country',

        filters: [
            {
                text: 'Turkey',
                value: 'Turkey',
            },
            {
                text: 'Pakistan',
                value: 'Pakistan',
            }, {
                text: 'Saudi Arabia',
                value: 'Saudi Arabia',
            },

        ],
        onFilter: (value, record) => record.country.startsWith(value),
        filterSearch: true,
    }, {
        title: 'City',
        dataIndex: 'address',
        filters: [
            {
                text: 'Sivas',
                value: 'Sivas',
            },
            {
                text: 'Dammam',
                value: 'Dammam',
            },
            {
                text: 'istanbul',
                value: 'istanbul',
            },
            {
                text: 'Riyadh',
                value: 'Riyadh',
            }, 
            {
                text: 'Karachi',
                value: 'Karachi',
            },
            {
                text: 'Islamabad',
                value: 'Islamabad',
            },
            {
                text: 'Ankara',
                value: 'Ankara',
            },
            {
                text: 'Multan',
                value: 'Multan',
            },
            {
                text: 'Lahore',
                value: 'Lahore',
            }, {
                text: 'jeddah',
                value: 'jeddah',
            },

        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];
const Tablecomponent = () => {
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1> Ant Design Table</h1>
            </div>
            <div>

                <Divider />
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        </>

    );
};
export default Tablecomponent;