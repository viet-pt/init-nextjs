import React from 'react';
import { fetchGetDetialProduct, fetchListProduct } from 'api/products';
import { DescProduct } from 'components/PageComponents';
import { Layout } from 'components/CommonComponents';

function nameproduct(props) {
	return (
		<Layout>
			<DescProduct {...props} />
		</Layout>
	);
}

nameproduct.getInitialProps = async ({ ctx }) => {
	const { query } = ctx;
	let [resultFetchData, resultFetch] = await Promise.all([fetchGetDetialProduct(query.id), fetchListProduct(1, 4)])
	if (resultFetchData?.data?.data && resultFetch?.data?.data) {
		return [{ ...resultFetchData.data.data }, [...resultFetch.data.data]];
	}
}

export default nameproduct;