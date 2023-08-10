import {Dispatch, Fragment, SetStateAction} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {CheckIcon, ChevronUpDownIcon} from '@heroicons/react/20/solid'
import {role} from "@/utils/backend_res_type";
import {classNames} from "@/utils/class_names";

type Props = {
  allRoles: role[]
  selectedRoles: role[]
  setSelectedRoles: Dispatch<SetStateAction<role[]>>;
  maxAmount?: number
}

// 表示するロールのセレクターです
export default function RoleSelector({allRoles, selectedRoles, setSelectedRoles, maxAmount}: Props) {
  const handleRoleChange = (selected: role[]) => {
    if (maxAmount) {
      // すでに選択されたロールの数が maxAmount に達している場合、新しいロールを追加しない
      if (selected.length > maxAmount) return;
    }

    setSelectedRoles(selected);
  }

  return (
    <div className="mb-2 max-w-[500px]">
      <Listbox value={selectedRoles} onChange={handleRoleChange} multiple>
        {({open}) => (
          <>
            <div className="relative">
              <Listbox.Button
                className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="block truncate">
                  {allRoles.length === selectedRoles.length
                    ? `全てのロール（${selectedRoles.length}個）が選択されています`
                    : `${selectedRoles.length}個のロールが選択されています`
                  }
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
              </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {allRoles.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({active}) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-8 pr-4'
                        )
                      }
                      value={person}
                    >
                      {({selected, active}) => (
                        <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {person.name}
                        </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                              )}
                            >
                            <CheckIcon className="h-5 w-5" aria-hidden="true"/>
                          </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  )
}
