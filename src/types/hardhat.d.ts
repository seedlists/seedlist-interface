/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IPrivateVaultHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPrivateVaultHub__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "IVaultHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVaultHub__factory>;
    getContractFactory(
      name: "PrivateVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PrivateVault__factory>;
    getContractFactory(
      name: "VaultHub",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultHub__factory>;

    getContractAt(
      name: "IPrivateVaultHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPrivateVaultHub>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "IVaultHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVaultHub>;
    getContractAt(
      name: "PrivateVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PrivateVault>;
    getContractAt(
      name: "VaultHub",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultHub>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}