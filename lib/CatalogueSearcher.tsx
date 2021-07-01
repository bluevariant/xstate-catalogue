import { useSelector } from '@xstate/react';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import * as icons from './Icons';
import { metadata, MetadataItem } from './metadata';
import { ModalsMachineInterpreter } from './modalsMachine';

const entries: (MetadataItem & { id: string })[] = Object.entries(metadata).map(
  ([id, value]) => ({
    ...value,
    id,
  }),
);

export const CatalogueSearcher = (props: {
  service: ModalsMachineInterpreter;
}) => {
  const input = useSelector(
    props.service,
    (state) => state.context.searchModalText,
  );
  const optionsToShow = useMemo(() => {
    const search = new RegExp(input, 'i');
    return entries
      .filter((entry) => {
        return search.test(entry.title);
      })
      .slice(0, 5);
  }, [input]);

  const router = useRouter();

  return (
    <div className="flex flex-col w-full bg-white">
      <div className="p-6 border-b">
        <div className="flex items-center px-4 pr-2 space-x-2 group focus-within:ring">
          <icons.SearchOutlined className="text-gray-400" />
          <input
            aria-label="Search"
            type="search"
            onChange={(e) => {
              props.service.send({
                type: 'UPDATE_SEARCH_MODAL_TEXT',
                text: e.target.value,
              });
            }}
            value={input}
            placeholder="Search for machines..."
            id="search"
            className="py-2 w-72 text-base text-gray-600 focus:outline-none"
            autoComplete="off"
          ></input>
          <div className="py-1 px-2 text-xs text-gray-400 rounded border border-gray-300">
            ESC
          </div>
        </div>
      </div>
      <ul className="p-6 py-4">
        {optionsToShow.map((option) => {
          const Icon = icons[option.icon];
          return (
            <li key={option.id}>
              <button
                onClick={() => {
                  let path = '/machines/';

                  if (window.location.pathname.startsWith('/views')) {
                    path = '/views/';
                  }

                  router.push(`${path}${option.id}`);
                  props.service.send('CLOSE');
                }}
                className="flex items-center py-3 px-3 space-x-3 w-full focus:outline-none focus:ring"
              >
                <Icon className="block flex-shrink-0 text-gray-500 fill-current" />
                <span className="block text-sm text-gray-600">
                  {option.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
