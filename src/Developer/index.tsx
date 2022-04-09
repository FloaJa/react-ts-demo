import * as React from 'react';
import {
  Button,
  Form,
  Popconfirm,
  Space,
  Table,
  message,
  TableColumnsType,
} from 'antd';
import { useSetState, useAntdTable, useRequest } from 'ahooks';
import { ProForm } from 'zat-design-pro-component';
import type {
  ColumnsPropsType,
  ProFormPropsType,
} from 'zat-design-pro-component/lib/ProForm/propsType.d';
// import type { DevPageType, DevState } from './index.d';
import { getDeveloperList, deleteDeveloperById } from '@/services/developer';
import type { DeveloperInfo, DeveloperParams } from '@/@types/developer';

const ChannelDefine: React.FC = (props) => {
  const { children } = props;
  const [form] = Form.useForm<DeveloperParams>();

  // const { tableProps, search } = useAntdTable(getDeveloperList, {
  //   form,
  //   defaultParams: [{ current: 1, pageSize: 10 }, {}],
  //   manual: true,
  // });
  // const { runAsync: fetchDelDeveloperById, loading: fetchDevLoading } =
  //   useRequest(deleteDeveloperById, {
  //     manual: true,
  //   });

  // 模块状态存储
  // const [channelState, setChannelState] = useSetRecoilState(channelRecordSelector);
  // const [state, setState] = useSetState<DevState>({
  //   detailVisible: false,
  //   IPVisible: false,
  //   authorityVisible: false,
  //   type: undefined,
  //   currentDev: undefined,
  // });
  // const { detailVisible, IPVisible, authorityVisible, type, currentDev } =
  //   state;

  const formColumns: ColumnsPropsType[] = [
    {
      type: 'Input',
      colProps: {
        span: 8,
      },
      formItemProps: {
        name: 'appKey',
        label: '开发者标识(appKey)',
      },
      formItemChildProps: {
        maxLength: 50,
      },
    },
    {
      type: 'Input',
      colProps: {
        span: 8,
      },
      formItemProps: {
        name: 'devName',
        label: '开发者名称',
      },
      formItemChildProps: {
        maxLength: 20,
      },
    },
  ];

  // const handleDeleteDev = async (id: number) => {
  //   const res = await fetchDelDeveloperById({ id });
  //   if (res?.status === 200) {
  //     message.success('删除成功');
  //     search.reset();
  //   }
  // };

  const columns: TableColumnsType<DeveloperInfo> = [
    {
      title: '开发者名称',
    },
    {
      title: '开发者标识(appKey)',
      dataIndex: 'appKey',
    },
    {
      title: 'code',
      dataIndex: 'devCode',
    },
    {
      title: '加密类型',
      dataIndex: 'encryptType',
    },
    {
      title: '操作',
      dataIndex: 'id',
      fixed: 'right',
      render: (text, record) => {
        return (
          <Space>
            <Button
              type="link"
              onClick={() => handleOpenDetail('view', record)}
            >
              查看
            </Button>
            <Button
              type="link"
              onClick={() => handleOpenDetail('edit', record)}
            >
              编辑
            </Button>
            <Popconfirm
              title="确定删除该接口吗?"
              onConfirm={() => {
                handleDeleteDev(record.id);
              }}
            >
              <Button type="link">删除</Button>
            </Popconfirm>
            <Button
              type="link"
              onClick={() => handleOpenDetail('auth', record)}
            >
              接口权限
            </Button>
            <Button
              type="link"
              onClick={() => handleOpenDetail('white', record)}
            >
              IP白名单
            </Button>
          </Space>
        );
      },
    },
  ];

  const formItemLayout: ProFormPropsType = {
    colon: false,
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    labelAlign: 'left',
  };
  return (
    <div>
      <ProForm
        className="search-button-margin"
        {...formItemLayout}
        form={form}
        columns={formColumns}
        // onFinish={search.submit}
        // onCancel={search.reset}
      />
      {/* <div style={{ paddingBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => {
            handleOpenDetail('add');
          }}
        >
          新增
        </Button>
      </div> */}
      <Table
        // {...tableProps}
        columns={columns}
        scroll={{ x: 1500 }}
        rowKey="id"
      />
      {/* 如果使用umi路由的 _layout 的话可以放开这段 */}
      {/* {React.isValidElement(children) &&
        React.cloneElement(children, {
          onClose: handleCloseDrawer,
          record: currentDev,
        })} */}
    </div>
  );
};

export default ChannelDefine;
