import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { getPage } from 'next-page-tester'
import { initTestHelpers } from 'next-page-tester'

initTestHelpers()

//テキストがあるかどうかのテスト
describe('Navigation by Link', () => {
	it('should route to selected page in navbar', async () => { //next-page-testerを使う場合は関数はasync
	const { page } = await getPage({ //getPage=pageを取得。
		route: '/index', //pageの中に取得したいページを格納(ここでいう'/index')
	})
	render(page) //render = HTMLの構造を取得

	userEvent.click(screen.getByTestId('blog-nav')) //Layout.tsxの中の'blog-nav'のIDを指定して、クリックの趣味レーションを実行
	expect(await screen.findByText('blog page')).toBeInTheDocument() //HTMLの中に'blog page'という文字が存在するか
	userEvent.click(screen.getByTestId('comment-nav'))
	expect(await screen.findByText('comment page')).toBeInTheDocument()
	userEvent.click(screen.getByTestId('context-nav'))
	expect(await screen.findByText('context page')).toBeInTheDocument()
	userEvent.click(screen.getByTestId('task-nav'))
	expect(await screen.findByText('todos page')).toBeInTheDocument()
	userEvent.click(screen.getByTestId('home-nav'))
	expect(await screen.findByText('Welcome to Nextjs')).toBeInTheDocument()
	}) 
})