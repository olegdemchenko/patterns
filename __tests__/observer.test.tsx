import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../src/observer/components/App';
import RSSEventMediator from '../src/observer/RSSEventMediator';
import { IFeedEmitter, INewsItem } from '../src/observer/interfaces';

const fakeRSSFeedEmitter: IFeedEmitter = {
  add() {},
  remove() {},
  on() {},
  removeAllListeners() {
    return [() => {}];
  },
};

const fakeRssFeed = 'https://fakerss.com/rss.xml';
const fakeNews: INewsItem = {
  link: 'https://fakerss.com/news/article',
  date: new Date(0),
  title: 'Some very important information',
};

test('test adding new channel', async () => {
  const testEmitter = new RSSEventMediator(fakeRSSFeedEmitter);
  render(<App rssEmitter={testEmitter} />);

  const rssLinksInput = screen.getByRole('textbox', { name: /enter rss/i });
  const searchButton = screen.getByRole('button', { name: /add/i });
  expect(rssLinksInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
  userEvent.type(rssLinksInput, fakeRssFeed);
  userEvent.click(searchButton);
  await waitFor(() => expect(screen.getByText(fakeRssFeed)).toBeInTheDocument());
  testEmitter.notify(fakeRssFeed, fakeNews);
  await waitFor(() => expect(screen.getByText(fakeNews.title)).toBeInTheDocument());
});

test('test adding several channels', async () => {
  const testEmitter = new RSSEventMediator(fakeRSSFeedEmitter);
  render(<App rssEmitter={testEmitter} />);

  const rssLinksInput = screen.getByRole('textbox', { name: /enter rss/i });
  const searchButton = screen.getByRole('button', { name: /add/i });
  userEvent.type(rssLinksInput, fakeRssFeed);
  userEvent.click(searchButton);
  await waitFor(() => expect(screen.getByText(fakeRssFeed)).toBeInTheDocument());

  const secondFakeRssFeed = 'https://secondfakerss.com/rss.xml';
  userEvent.type(rssLinksInput, secondFakeRssFeed);
  userEvent.click(searchButton);
  await waitFor(() => expect(screen.getByText(secondFakeRssFeed)).toBeInTheDocument());
});

test('test deleting added channel', async () => {
  const testEmitter = new RSSEventMediator(fakeRSSFeedEmitter);
  render(<App rssEmitter={testEmitter} />);

  const rssLinksInput = screen.getByRole('textbox', { name: /enter rss/i });
  const searchButton = screen.getByRole('button', { name: /add/i });
  userEvent.type(rssLinksInput, fakeRssFeed);
  userEvent.click(searchButton);
  await waitFor(() => expect(screen.getByText(fakeRssFeed)).toBeInTheDocument());
  const removeChannelButton = screen.getByRole('button', { name: /remove/i });
  userEvent.click(removeChannelButton);
  await waitFor(() => expect(removeChannelButton).not.toBeInTheDocument());
});
